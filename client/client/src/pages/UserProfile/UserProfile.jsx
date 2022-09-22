import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

import Avatar from '../../component/Avatar/Avatar'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './Users.css'
import { fetchAllUsers } from "../../actions/users";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake , faPen , faMapMarker ,faSpinner} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'


const UserProfile = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id )[0]
    const currentUser = useSelector((state) => state.currentUserReducer)

    const [Switch , setSwitch] = useState(false)
    const [ip,setIp] = useState("");
    const [cityName,setCityName] = useState("");

    const fetchLocation = () => {
        const cityApi = axios.get(`https://ipapi.co/${ip}/json/`)
        cityApi.then((res,err) => {
            if(res.data){
                setCityName(res.data.city)
            }
        })
    }

    useEffect(() => {
        fetchLocation();
        dispatch(fetchAllUsers());
        setIp(currentProfile?.ip)
    },[])


    return (
        <div className='home-container-1'>
            <LeftSidebar />

            <div className="home-container-2">
                <section>
                    <div className="user-details-container">
                        <div className="user-details">
                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='30px' py='40px'>
                                {currentProfile?.name ? (

                                    currentUser?.name.charAt(0).toUpperCase()
                                ) : (
                                    currentUser?.result?.phoneNumber.charAt(0) 
                                )

                                }
                            </Avatar>
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon= {faBirthdayCake} />Joined {moment(currentProfile?.joinedOn).fromNow()} </p>
                                <p><FontAwesomeIcon icon={faMapMarker} /> {
                                        cityName ? cityName :
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                    }
                                </p>
                            </div>
                            
                        </div>
                        {
                            currentUser?.result?._id === id && (
                                <button type = "button" onClick = {() => (setSwitch(true))} className = 'edit-profile-btn'>
                                    <FontAwesomeIcon icon = {faPen} /> Edit Profile
                                </button>
                            )
                        }
                    </div>
                    <>
                        {
                            Switch ? (
                                <EditProfileForm currentUser = { currentUser } setSwitch = {setSwitch}/>
                            ) :
                            (
                                <ProfileBio currentProfile = { currentProfile }/>
                            )
                        }
                    </>
                </section>
            </div>
            
        </div>
    )
}

export default UserProfile
