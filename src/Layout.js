import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/Header';
import {alpha } from '@mui/material/styles';
import Sidebar from './components/Sidebar';


const Layout = () => {
    return ( 
    <Container 
        maxWidth={false}
        disableGutters
        sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            maxWidth: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: (theme) => alpha(theme.palette.fill.lightGreen, 1),
        }}      
    >
        <Sidebar/>
        {/* <Box 
        sx={{ 
            // backgroundColor: (theme) => alpha(theme.palette.fill.mediumGreen, 1),
            height: '100vh',
            width: '30%', 
            }} 
        >

        </Box> */}

        <Box 
        sx={{ 
            bgcolor: '#00000000',
            height: '100vh',
            width: '70%'
            }} 
        >
            <Header/>

        </Box>
        </Container>
);
}
 
export default Layout;