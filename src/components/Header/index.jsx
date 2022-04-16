import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Typography, SvgIcon } from '@mui/material'; 
import { Link } from 'react-router-dom';
import  Logo from'../HomeLogo/HomeLogo';

export default function MenuAppBar({user}) {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>

      <AppBar position="static" height="fit-content" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          
           
            <object style={{position:"relative", width:100, height:100, paddingtop:'100.0000%',
 paddingbottom:"48px", boxshadow:"0 2px 8px 0 rgba(63,69,81,0.16)", margintop:"1.6em", marginbottom:"0.9em", marginright:"2em",overflow: "hidden",
 borderradius:"8px", willchange:"transform"}}>
  <iframe title='homelogo' loading="lazy" style={{position:"absolute", width:"100%", height:"100%", top:0, left:0, border:"none", padding:0, margin:0}}
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE-AuDUGbE&#x2F;watch?embed"   allow="loop">
  </iframe>
</object>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE-AuDUGbE&#x2F;watch?utm_content=DAE-AuDUGbE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Electronics</a> by Jordan Holt
            
           
          
          {!auth && (
            <div ml='10em'>
            <IconButton
              size="large"
                aria-label='login'
            
                component={Link} to={'/login'}
              color='inherit'>
              Login
              </IconButton>
              <IconButton
              size="large"
              aria-label='login'
                component={Link} to={'/user/account'}
              color='inherit'>
                Profile
              </IconButton>
               <IconButton
              size="large"
              aria-label='Register'
                component={Link} to={'/register'}
              color='inherit'>
                Register
              </IconButton>
              <IconButton
              size="large"
              aria-label='AddToCart'
                component={Link} to={'/product/add'}
              color='inherit'>
                Add To Cart
              </IconButton>
            </div>
               
          )}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle  />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}