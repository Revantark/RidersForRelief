import React from 'react';
import Navbar from '../../global_ui/nav';
import styles from "./RequesterProfile.module.css"
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Button from '../../global_ui/buttons/button'

import {LoadingScreen} from '../../global_ui/spinner';
import {Dialog} from '../../global_ui/dialog/dialog';

const RequesterProfile=()=>{
    const history = useHistory();
    const [data, setData] = useState({
        fullName:'',
        phoneNumber:'',
        address:'',
        yearOfBirth:'',
        profileURL:''
    });
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token')
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(
        async () => {
            const options = {
                headers: {
                    'authorization': 'Bearer ' + token
                }
            }
            axios.get('http://localhost:8000/requester/profile',options)
            .then(response => {
                setData({
                    fullName:response.data.fullName,
                    phoneNumber:response.data.phoneNumber,
                    address:response.data.address+","+response.data.city+","+response.data.pincoode,
                    yearOfBirth:response.data.yearOfBirth,
                    profileURL:response.data.profileURL
                });
                setisLoaded(true);
                setError(null)
            }, error => {
                console.log("An error occured", error);
                setError(error.toString());
                setisLoaded(true);
            })
    }, [])

    return (
        isLoaded?  
        (
            error?
            <Dialog
            isShowing={error} 
            onOK={() => {
                setError(false)
                history.push("/my_profile") 
            }} 
            msg={"Unable to Load Profile"} />
            :
            <div className={styles.requesterProfileContainer}>

            <Navbar back={true} backStyle={{ color: 'white' }} title="My Account" titleStyle={{ color: 'white' }} style={{ backgroundColor: '#79CBC5', marginBottom: "10px" }} />
            
            <img src={data.profileURL} ></img>

            <label>Full Name</label>            
            <span>
            {data.fullName}
            </span>

            <label>Phone Number</label>
            <span >
            {data.phoneNumber}
            </span>

            <label>Address</label>
            <span>
                {data.address}
            </span>

            <label>Year Of Birth</label>        
            <span>
                {data.yearOfBirth}
            </span>
            
            <div></div>

            <Button
                bgColor="green"
                isRounded="true"
                text="EDIT"
                fontSize="17px"
                customClass={{letterSpacing:'1px'}}
                onClick={history.push('/edit_profile')}
            />           

        </div>
        )
        :
        <LoadingScreen />
        )
    };

export default RequesterProfile;