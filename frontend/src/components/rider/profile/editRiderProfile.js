import React from 'react';
import {useState,useEffect} from "react";
import styles from "./editRiderProfile.module.css";
import axios from 'axios';
import InputField from "../../global_ui/input";
import Navbar from "../../global_ui/nav";
import {Dialog} from '../../global_ui/dialog/dialog';
import {LoadingScreen} from '../../global_ui/spinner';

const EditRiderProfile = () => {

  const [requestError, setRequestError] = useState(null);
  const token = localStorage.getItem('token');
  const [isLoaded,setisLoaded] = useState(false);
  const [isProfileUpdated, setisProfileUpdated] = useState(false);

  const [data, setData] = useState({
    profileURL: '',
    fullName :"",
    phoneNumber:"",       
  });  
  const [fullNameError, setfullNameError] = useState(null);
  const [phoneNumberError, setphoneNumberError] = useState(null); 

  async function showSnackBar() {
    setTimeout(() => {
      setisProfileUpdated(false)
    }, 2000);    
  }

  useEffect(
    async () => {
        console.log(token)
        const options = {
            headers: {
                'authorization': 'Bearer ' + token
            }
        }
        axios.get('http://localhost:8000/rider/profile',options)
        .then(response => {
            setData({
                name:response.data.message.name,
                mobile:response.data.message.mobile,
                profileUrl:response.data.message.profileUrl
            })
            setisLoaded(true);
            setRequestError(null)
        }, error => {
            console.log("An error occured", error);
            setRequestError(error.toString());
            setisLoaded(true);
        })
}, [])

  function updateProfile(){
    setisLoaded(false)
    const options={
      headers: {
        'authorization': 'Bearer ' + token
      }
    }

    axios.put('http://localhost:8000/rider/profile',data,{options})   
    .then(response =>{
      // setData(response.data)
      console.log(response);
      setisLoaded(true);
      setRequestError(null);
      setisProfileUpdated(true);
      showSnackBar();

      })
    .catch((error)=>{
      setRequestError(error.message)
      setisLoaded(true)
    })
 }

 const submit = (event)=>{
   event.preventDefault();
   const d = data;

   if(validateName({target:{value:d.fullName}}) & validatePhNumber({target:{value:d.phoneNumber}})){
    updateProfile();
    }
  }
  
 const validatePhNumber = (e) => {
   let flag=false;
  const phoneNumber = e.target.value;
  const regE = /^[6-9]\d{9}$/;
  if (phoneNumber.length > 10) {
    setphoneNumberError(
      "Phone number exceeds 10 digits"
      );
  } 
  else if (!regE.test(phoneNumber)) {
    setphoneNumberError(
      "Enter a valid mobile number"
      );
  } 
  else {
    setphoneNumberError(
      null
      );
      flag=true
    }
    
  setData({
    ...data,
    phoneNumber: e.target.value,
  }); 
  return flag;
};
  
const validateName = (e) => {
  let flag=false
  const fullName = e.target.value;
  if (fullName === "") {
    setfullNameError(
      "Enter your name"
    );
  }
  else if (fullName.length < 3) {
    setfullNameError(
      "Name must be atleast 3 characters!"
   );
  }
  else if (fullName.length > 16) {
    setfullNameError(
      "Name must not exceed 16 characters!"
   );
  } 
  else if (!/^[a-zA-Z .]{3,16}$/
  .test(fullName)) {
    setfullNameError(
      "Name can only contain alphabets"
    );
  }  
  else {
    setfullNameError(
      null
      );
      flag=true
    }   
  setData({
    ...data,
    fullName: e.target.value,
  }); 
  return flag 
};


    return (    
      isLoaded?(
        requestError?
            <Dialog
            isShowing={requestError} 
            onOK={() => {
                setRequestError(false)
                //history.push("/home/requester") 
            }} 
            msg={requestError} />
            : 
        <div className={styles.riderProfileContainer}>

            {
               isProfileUpdated &&
               <nav style={{
                 height:'30px',
                 background:'grey',
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 width:'100%',
                 padding:'0px',
                 marginBottom:'-13px'
                 }}>Profile Updated Successfully</nav>

             }
                        
            <Navbar 
            back={true} 
            backStyle={{ color: 'white' }} 
            title="My Account" titleStyle={{ color: 'white' }} 
            style={{ backgroundColor: '#79CBC5', marginBottom: "8px" }} />          
            
            <form className={styles.form} onSubmit={submit}> 
                <img className={styles.profileImage} src={data.profileURL}></img>

                <InputField 
                value={data.fullName}
                type = "text"
                maxLength ="40"
                placeholder="Enter your name"
                error={fullNameError}
                onChange={validateName}/>

                <InputField
                  value={data.phoneNumber}
                  type="number"
                  maxLength="10"
                  placeholder="Mobile Number"
                  error={phoneNumberError}
                  onChange={validatePhNumber}/> 

                <div className={styles.filler}></div>                 

                <button onClick={submit} className={styles.btn}>Save Changes</button>     

            </form>

        </div> 
        ):
        <LoadingScreen />

    );
  };
  
  export default EditRiderProfile;