import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import {auth} from '../../Firebase/firebase.init'
import Logo from '../../Assets/images/logo.png'

const Navbar = () => {

    const { pathname } = useLocation();
    const [currentUser, setCurrentUser] = useState({});
    console.log(currentUser);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser({});
        }
      });
  
      return () => unsubscribe;
    }, []);
  
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
        <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/videos'
        >
          Videos
        </NavLink>
        {currentUser?.email ? (
          <button onClick={handleLogout} className='logout-button'>
            Logout
          </button>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to='/login'
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
    );
};

export default Navbar;