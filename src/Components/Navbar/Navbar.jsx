import { AppBar, Button } from '@mui/material'
import React, { useEffect } from 'react'
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import s from './Navbar.module.css';

export default function Navbar() {
  const auth = useAuth()
  return (
    <div>
      <AppBar position="static">
        <div className={s.wrapper}>
          <div className={s.left}>
            <Link to='/' style={{textDecoration: "none", color: "white"}}><h1 className={s.logo}>SWEET HOME</h1></Link>
          </div>
          <div className={s.center}>
            <Link to='/store/pag/1' style={{textDecoration: "none", color: "white"}}><div className={s.menuItem}>STORE</div></Link>                  
          </div>
          <div className={s.right}>
            {auth.user == null && (<Link to='/register'><div className={s.menuItem}>REGISTER</div></Link>)}
            {auth.user == null && (<Link to='/login'><div className={s.menuItem}>SIGN IN</div></Link>)}
            {auth.user != null && (<Button onClick={()=>{auth.logout()}} color="inherit">Logout</Button>)}
            <div className={s.menuItem}><ShoppingCartButton/></div>
          </div>
        </div>
        {/* <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dulce Hogar
          </Typography>
          <Button onClick={()=>{console.log("se entra en la tienda");navigate('/store')}} color="inherit">Store</Button>
          <ShoppingCartButton/>
          {auth.user == null && (<Button onClick={()=>{navigate('/register')}} color="inherit">Sign in</Button>)}
          {auth.user == null && (<Button onClick={()=>{navigate('/login')}} color="inherit">Login</Button>)}
          {auth.user != null && (<Button onClick={()=>{auth.logout()}} color="inherit">Logout</Button>)}
        </Toolbar> */}
      </AppBar>
    </div>
  )
}
