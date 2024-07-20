import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    
    fill: {
      default: '#000000', // Clear
      light: '#FFFFFF',
      lightGreen: '#F8FAF0',
      mediumGreen: '#606C3880', 
      darkGreen: '#283618', 
    //   Umber-green: ‘#606C3880, 

   },
    
   color: {
      default: '#000000',
      light: '#28361860',
      darkGreen:'#283618'
   },
    
  },
  shapes: {
   borderRadius: 32,
   },

  });

export default customTheme;