import React from 'react';
import {useState,useEffect} from "react";
import axios from 'axios'
import styles from "./editRequesterProfile.module.css";
import InputField from "../../global_ui/input";
import Navbar from "../../global_ui/nav";
// import { useHistory } from 'react-router-dom';
import Dialog from '../../global_ui/dialog/dialog';
import TextArea from '../../global_ui/textarea/textArea'

const EditRequesterProfile = () => {
<<<<<<< HEAD
=======
  //pass a prop here to get data

  // const history = useHistory();
  const token = localStorage.getItem('token')
  const [requestError, setRequestError] = useState(null); 

  //use when you pass prop
  // const [data, setData] = useState({
  //   profilePhoto:profile.profilePhoto ,
  //   fullName :profile.fullName,
  //   phoneNumber:profile.phoneNumber,
  //   yearOfBirth:profile.yearOfBirth,
  //   address:profile.address,
  //   city:profile.city,
  //   pincode:profile.pincode,
  // });

>>>>>>> Pranchal15-test
  const [data, setData] = useState({
    profilePhoto:"" ,
    fullName :"",
    phoneNumber:"",
    yearOfBirth:"",
    address:"",
    city:"",
    pincode:"",
  });

  //const history = useHistory();
  const token = localStorage.getItem('token')
  const [requestError, setRequestError] = useState(null); 

  const [fullNameError, setfullNameError] = useState(null);
  const [phoneNumberError, setphoneNumberError] = useState(null);
  const [yearOfBirthError, setyearOfBirthError] = useState(null);
  const [addressError, setaddressError] = useState(null);
  const [cityError, setcityError] = useState(null);
  const [pincodeError, setpincodeError] = useState(null);
<<<<<<< HEAD

  //pass a prop here to get data
  //use when you pass prop
  // const [data, setData] = useState({
  //   profilePhoto:profile.profilePhoto ,
  //   fullName :profile.fullName,
  //   phoneNumber:profile.phoneNumber,
  //   yearOfBirth:profile.yearOfBirth,
  //   address:profile.address,
  //   city:profile.city,
  //   pincode:profile.pincode,
  // });
=======
>>>>>>> Pranchal15-test
  
  function updateProfile() {
    const options = {
      headers: {
          'authorization': 'Bearer ' + token
      }
    }
    axios.put('http://localhost:8000/requester/profile',options)
          .then(response => setData(response.data))
          .catch((error)=>{
          setRequestError(error)
    })    
  }

  function validateAll(d) {
      if(
        validateCity({target:{value:d.city}})& 
        validateName({target:{value:d.fullName}})&
        validatePincode({target:{value:d.city}})&
        validateYear({target:{value:d.yearOfBirth}})&
        validatePhNumber({target:{value:d.phoneNumber}})&
        validateAddress({target:{value:d.address}})
      ){
        return true
      }
      return false    
    }

<<<<<<< HEAD
    const submit = async(event)=> {
      event.preventDefault();  
      if(validateAll(data)){
        console.log("Come on ");
        updateProfile();
=======
      if(cityError||phoneNumberError || pincodeError || fullNameError || yearOfBirthError ||addressError){
        console.log(10,cityError,phoneNumberError,pincodeError,fullNameError,yearOfBirthError,addressError);
>>>>>>> Pranchal15-test
      }
      else{
        console.log("Update Failed");
      }             
    }
  
    const validatePhNumber = (e) => {
      const phoneNumber = e.target.value;
      const regE = /^[6-9]\d{9}$/;
      let flag=false;

      if (phoneNumber.length > 10) {
        setphoneNumberError(
          "Mobile Number exceeds 10 digits"
          );
      } 
      else if (!regE.test(phoneNumber)) {
        setphoneNumberError(
          "Enter a valid Mobile Number"
          );
      } 
      else {
        setphoneNumberError(
          null
        );
        flag=true;
      }
      setData({
        ...data,
        phoneNumber: e.target.value,
      });
      return flag;
    };
  
    const validateName = (e) => {
      const fullName = e.target.value;
      let flag=false;

      if (fullName === "") {
        setfullNameError(
           "Name cannot be Empty"
      );
      } 
      else if (!/^[a-zA-Z]*$/.test(fullName)) {
        setfullNameError(
          "Name must contain only alphabets"
        );
      } 
      else if (fullName.length < 3) {
        setfullNameError(
           "Name must be atleast 3 characters!"
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
      return flag;
    };

    const validateAddress = (e) => { 
      const address = e.target.value;
      let flag=false;
      
      if(address===""){
        setaddressError(
        "Address cannot be Empty"
        )
      } 
      else{
        setaddressError(
          null
        )
        flag=true
      }      
      setData({
          ...data,
          address: e.target.value
      })
      return flag;
    };

    const validateCity = (e) => {
      const city = e.target.value;
      let flag=false;

      if(city===""){
        setcityError(
          "City Name cannot be Empty"
        )
      }  
      else{
        setcityError(
          null
        )
        flag=true
      }     
      setData({
          ...data,
          city: city
      })
      return flag;
    };

    const validatePincode = (e) => {
      const pincode = e.target.value;
      let flag=false;


       if (pincode === "") {
          setpincodeError(
           "Pincode cannot be empty"
          );
        }
        else if(pincode.length>6){
            setpincodeError(
                "Invalid Pincode!"
            );
        }
        else if(pincode.length<6){
          setpincodeError(
            "Invalid Pincode!"
          );
        } 
        else {
          setpincodeError(null);
          flag=true
        } 
        setData({
            ...data,
            pincode: e.target.value,
        });
        return flag;
    };
  
    const validateYear = (e) => {
      let flag=false;
      const year = e.target.value;
      const cyear = new Date().getFullYear();
  
      if (!parseInt(year) || parseInt(year) < cyear - 100) {
        setyearOfBirthError(
         "Invalid Year!"
        );
      } 
      else if (parseInt(year) > cyear - 13) {
        setyearOfBirthError(
          "Invalid Year!"
        );
      } 
      else if (year.length == 0) {
        setyearOfBirthError(
         "Enter Year!"
        );
      } 
      else if (year.length != 4) {
        setyearOfBirthError(  
           "Invalid Year"
        );
      } 
      else {
        setyearOfBirthError(  
          null
       );
       flag=true
      }
      setData({
        ...data,
        yearOfBirth: e.target.value,
      });
      return flag;
    };

    return (        
        <div className={styles.requesterProfileContainer}>

            <Navbar back={true} backStyle={{ color: 'white' }} title="My Account" titleStyle={{ color: 'white' }} style={{ backgroundColor: '#79CBC5', marginBottom: "10px" }} />
            
            <Dialog isShowing={requestError} onOK={()=>setRequestError()} />
            
            <form className={styles.editProfileForm} onSubmit={submit}>
                
                <img className={styles.profileImage}></img>

                <InputField                 
                value={data.fullName}
                type = "text"
                maxLength ="40"
                placeholder="Name"
                error={fullNameError?fullNameError:null}
                onChange={validateName}                
                />

                <InputField
                value={data.phoneNumber}
                type="number"
                maxLength="10"
                placeholder="Mobile Number"
                error={ phoneNumberError  ? phoneNumberError : null}
                onChange={validatePhNumber}            
                />

                <InputField
                value={data.yearOfBirth}
                type="number"
                maxLength="4"
                placeholder="Year Of Birth"
                error={ yearOfBirthError ? yearOfBirthError : null}
                onChange={validateYear}
                />

                <div className={styles.address}>
                    <div className={styles.completeAddress}>
                        <TextArea                
                        value={data.address}
                        placeholder="Address"
                        rows="3"
                        onChange={validateAddress}
                        error={ addressError ? addressError :null}
                        />
                    </div>

                    <div className={styles.city}>
                        <InputField
                          value={data.city}
                          type="text"
                          placeholder="City"
                          error={cityError? cityError : null}
                          onChange={validateCity}
                          />                        
                    </div>

                    <div className={styles.pincode}>
                        <InputField 
                        value={data.pincode}
                        type="number"
                        placeholder="Pincode"
                        error={ pincodeError ? pincodeError:null}
                        onChange={validatePincode}
                        />
                    </div>  

                </div>       
            </form>
              
            <button onClick={submit} className="submit">Save Changes</button>

        </div>  
        );
      };
  
export default EditRequesterProfile;
  
