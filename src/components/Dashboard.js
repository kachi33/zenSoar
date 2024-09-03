import React from 'react';
import AppLayout from './UI/AppLayout';
import { Typography, Box } from '@mui/material';

const Dashboard = () => {
    return ( 
        <AppLayout title="Dashboard">
            <Box sx={{ flexGrow: 1}}>
                <Typography> Welcome to the dashboard user</Typography>
            </Box>
        </AppLayout>
     );
}
 
export default Dashboard;