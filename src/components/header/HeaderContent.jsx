import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';
import SkillContainer from '../skills/SkillContainer';
import ExperienceContainer from '../experience/ExperienceContainer';
import ProjectContainer from '../projects/ProjectContainer';
import ContactContainer from '../contact/ContactContainer';
import TopContainer from '../topbar/TopContainer';
import { globalStyle } from '../../style/GlobalStyles';
const HeaderContent = () => {

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
        <>
            {/* <Grid><MenuRounded /></Grid> */}
            {/* <Grid bgcolor='red'>
                <List>
                  <ListItem>jk</ListItem>
                  <ListItem>jk</ListItem>
                  <ListItem>jk</ListItem>
                </List>
            </Grid> */}

<AppBar position="sticky" sx={{backgroundColor:'#1A0B2E', zIndex:'2000', top:'0'}}>
      <Container maxWidth="xl" sx={{m:'15px auto'}}>
        <Toolbar disableGutters >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KARMILAN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                // bgColor:'red !important',
                
              }}
            >
              
                <MenuItem href="#section1" onClick={handleCloseNavMenu}>
                <Button href="#section1">
                  <Typography color={globalStyle.textColorBlack} textAlign="center">About me</Typography>
                  </Button>
                </MenuItem>
                <MenuItem href="#section2" onClick={handleCloseNavMenu}>
                <Button href="#section2">
                  <Typography color={globalStyle.textColorBlack} textAlign="center">Skills</Typography>
                  </Button>
                </MenuItem>
                <MenuItem href="#section3" onClick={handleCloseNavMenu}>
                <Button href="#section3">
                  <Typography color={globalStyle.textColorBlack} textAlign="center">Experiences</Typography>
                  </Button>
                </MenuItem>
                <MenuItem href="#section4" onClick={handleCloseNavMenu}>
                <Button href="#section4">
                  <Typography color={globalStyle.textColorBlack} textAlign="center">Projects</Typography>
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button href="#section5">
                  <Typography color={globalStyle.textColorBlack} textAlign="center">Contacts</Typography>
                  </Button>
                </MenuItem>
              
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KARMILAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:{md:'end'},fontFamily: 'alata', }}>
              <Button
              href="#section1"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About me
              </Button>
              <Button
              href="#section2"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Skills
              </Button>
              <Button
              href="#section3"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Experiences
              </Button>
              <Button
              href="#section4"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Projects
              </Button>
              <Button
              href="#section5"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacts
              </Button>
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  
  {/* ---------------------------Pages------------------------------- */}
  <div id='section1'>

  <TopContainer />
  </div>

  <div id="section2">

      <SkillContainer />
  </div>
  <div id="section3">
      <ExperienceContainer />
      </div>

  <div id="section4">
      <ProjectContainer />
      </div>

  <div id="section5">
      <ContactContainer />
      </div>
        </>
    )
}

export default HeaderContent
