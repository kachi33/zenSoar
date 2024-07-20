import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';



//// import fontAwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faUser  } from '@fortawesome/free-solid-svg-icons'; // Import icons


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shapes.borderRadius,
//   backgroundColor: alpha(theme.palette.fill.lightGreen, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.fill.light, 1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: alpha(theme.palette.color.default, ),
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = function() {
    return (
        <Box sx={{ flexGrow: 1}}>
          <AppBar 
          position="fixed"
          sx={{ 
            backgroundColor: (theme) => alpha(theme.palette.fill.default, 0),
            width: 'calc(100% - 30%)', 
        }}
        >
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}} >
            
              <Search>
                <SearchIconWrapper>
                  {/* <SearchIcon /> */}
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />                
                    </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search topics…"
                inputProps={{ 'aria-label': 'search' }}
                />
              </Search>

              <Box sx={{ display:'flex'  }}>
            <IconButton size="large" aria-label="show 9 new notifications" color="inherit"
            sx={{
             backgroundColor: (theme) => alpha(theme.palette.fill.default, 0),
            '&:hover': {
                backgroundColor: (theme) => alpha(theme.palette.fill.light, 1), // Ensuring the hover color remains the same
             }
             }}

            >
              <Badge badgeContent={4} color="error">
                <FontAwesomeIcon 
                icon={faBell} 
                style={{  color: "#000000", 
                }} 
                />
              </Badge>
            </IconButton>

            <Divider orientation="vertical" variant="middle" flexItem   
            sx={{
                mx: "10px",
             }}
            />

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.fill.darkGreen, 1),
                '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.fill.light, 1), // Ensuring the hover color remains the same
                },
              }}
              >
              <Badge badgeContent={" "} color="error">
              <FontAwesomeIcon 
              icon={faUser}  
              style={{ 
                color: (theme) => alpha(theme.palette.color.light, 1), 
                }}
                 />
              </Badge>
            </IconButton>
          </Box>
              
            </Toolbar>
          </AppBar>
        </Box>
      );  
    }
    
    

export default Header;