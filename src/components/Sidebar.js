import * as React from 'react';
import { IconButton, Box, Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Typography  } from '@mui/material';
import {alpha } from '@mui/material/styles';
import Logo from './UI/Logo';

// import fontAwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faUser, faHouseUser } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {

    // State to manage selected index
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    // Function to handle click events
    const handleListItemClick = (index) => {
      setSelectedIndex(index);
    };
  

    const items = [
      { text: 'Dashboard', icon: <FontAwesomeIcon icon={faHouseUser}  style={{color: "#000000",}} /> },
      { text: 'Settings', icon: <FontAwesomeIcon icon={faSliders} style={{color: "#000000",}} /> },
    ];
    
    return ( 
        
      <Drawer 
          sx={{
              width: '25%',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: '25%',
                boxSizing: 'border-box',
                backgroundColor: (theme) => alpha(theme.palette.fill.mediumGreen, 1),
              },
            }}
            variant="permanent"
            anchor="left"
      >
        <Box 
          sx={{ 
            flex: 1,
            color: (theme) => alpha(theme.palette.fill.light, 1),
          }}>

            {/* Page logo here */}
          <Toolbar >
            <Logo/>
            </Toolbar> 

          <Divider sx={{ mb: "50px", }}/>
          {/* Drawer navigation goes here */}
          <List>
              {items.map((item, index) => (
            <ListItem 
              key={item.text} 
              >
              
              <ListItemButton
              selected={selectedIndex === index} // Check if this item is selected
              onClick={() => handleListItemClick(index)} // Handle click event
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
          </ListItem>
          ))}
          </List>
          <Divider />
        </Box>

        <Box sx={{ padding: 2 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              color="inherit"
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.fill.darkGreen, 1),
                '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.fill.mediumGreen, 1), // Ensuring the hover color remains the same
                  },
              }}
              >
              <FontAwesomeIcon 
              icon={faUser}  
              style={{ 
                color: '#F8FAF0', 
              }}
              />
            </IconButton>
            <Typography 
            variant="body2" 
            sx={{
              mx: '20px',
              color: (theme) => alpha(theme.palette.fill.light, 1),
              // padding: '10px',
            }}>
              Admin
            </Typography>
          </Toolbar>
        </Box>

    </Drawer>
     );
}
 
export default Sidebar;