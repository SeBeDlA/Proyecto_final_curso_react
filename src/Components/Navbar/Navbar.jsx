import { AppBar, Button } from '@mui/material'
import React, { useEffect } from 'react'
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import s from './Navbar.module.css';
import ProfileAvatarButton from '../ProfileAvatarButton/ProfileAvatarButton';

export default function Navbar() {
  const auth = useAuth()
  return (
    <div>
      <AppBar position="static">
        <div className={s.wrapper}>
          <div className={s.left}>
            <Link to='/' style={{textDecoration: "none", color: "white"}}><h1 className={s.logo}>SWEET HOME</h1></Link>
          </div>
          <div className={s.right}>
            <Link className='mr-5' to='/store/pag/1' style={{textDecoration: "none", color: "white"}}><div className={s.menuItem}>STORE</div></Link>      
            {auth.user == null && (<Link to='/register'><div className={s.menuItem}>REGISTER</div></Link>)}
            {auth.user == null && (<Link to='/login'><div className={s.menuItem}>SIGN IN</div></Link>)}
            <Link to="/cart" className={s.menuItem}><ShoppingCartButton/></Link>
            <ProfileAvatarButton />
          </div>
        </div>
      </AppBar>
    </div>
  )
}
