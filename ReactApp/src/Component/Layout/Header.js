import React, { Fragment, useState } from 'react'


import { AppBar, Typography, Box, Toolbar, IconButton, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link , NavLink } from 'react-router-dom'

import "../../Styles/HeaderStyle.css";
import Logo from '../../images/logo.svg';



import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)
  // Handle menu drawer 

  const handleDrawerToggle = () => {

    setMobileOpen(!mobileOpen)
  }
  const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'centre' }}>

      <Typography color={"black"} variant="h6" component="div" sx={{ flexGrow: 1, my: 3, marginLeft: '1.8rem', fontSize: '25px' }}>
        {/* <FastfoodIcon /> My Resturant */}
        

        <img src={Logo} alt="Logo"   height={'70'} width={'250'}/>
        </Typography>
      <Divider />



      <ul className='mobile-navigation'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>


        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>


        <li>
          <Link to={'/about'}>About</Link>
        </li>


        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>

      </ul>



    </Box>
  )


  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "#131313" }} >
          <Toolbar>
            <IconButton color="black" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon   sx = {{color :"white"}} />
            </IconButton>
            <Typography color={"black"} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* <FastfoodIcon /> My Resturant */}

              <img src={Logo} alt="Logo"   height={'70'} width={'250'}/>
              
              
              </Typography>


            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink  activeClassName = "active" to={'/'}>Home</NavLink>
                </li>


                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>


                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>


                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>

              </ul>

            </Box>
          </Toolbar>

        </AppBar>

        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              }
            }}
          >
            {drawer}
          </Drawer>

        </Box>
        <Toolbar />
      </Box>

    </>

  )
}

export default Header