import React , {useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'



import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../component/Avatar/Avatar'
import '../../component/Navbar/Navbar.css'
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
   
    var User=useSelector((state) => (state.currentUserReducer))
    var OtpUser = useSelector((state) => (state.Auth))
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({type:'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() =>{
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            } 
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } , [dispatch])


    return(
       <nav className="main-nav">
        <div className='navbar'>
            <Link to='/' className="nav-item nav-logo">
                <img src={logo} alt="logo" />
            
            </Link>
            <Link to='/about' className="nav-item nav-btn">About</Link>
            <Link to='/products' className="nav-item nav-btn">Products</Link>
            <Link to='/contact' className="nav-item nav-btn">Contact</Link>
            <form>
                <input type="text" placeholder="Search...." />
                <img src={search} width="20" alt="search" className="search-icon" />


            </form>

            { User === null ?
            <Link to='/Auth' className="nav-item nav-links">Log in</Link>:
            <>
                {
                    User.result?.name ? (
                        <Avatar backgroundColor='#009dff' px="10px" py="13px" borderRadius="50%" color="white" ><Link to= { `/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{
                            User.result.name.charAt(0).toUpperCase() }</Link></Avatar>
                    ) :
                    (
                        <Avatar backgroundColor='#009dff' px="10px" py="13px" borderRadius="50%" color="white" ><Link to= { `/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{
                            User.result.phoneNumber.charAt(0) }</Link></Avatar>
                    )
                } 
              {/* User.result.name.charAt(0).toUpperCase() */}
              <button className="nav-item nav-links" onClick = {handleLogout}>Log out</button>
            </>
        
        }

        </div>
       </nav>
    )
    
}


export default Navbar
