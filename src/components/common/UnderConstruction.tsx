import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
} from '@mui/material';
import {
  Construction,
  Engineering,
} from '@mui/icons-material';

interface UnderConstructionProps {
  title?: string;
  message?: string;
  showIcon?: boolean;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title = "Under Construction",
  message = "This page is currently being developed. Please check back soon!",
  showIcon = true,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        p: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          maxWidth: 500,
          backgroundColor: '#fefae0',
          border: '2px dashed #bc6c25',
        }}
      >
        {showIcon && (
          <Box sx={{ mb: 3 }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                mb: 2,
                backgroundColor: '#283618',
              }}
            >
              <Construction sx={{ fontSize: 40, color: 'white' }} />
            </Avatar>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
              <Engineering sx={{ color: '#606c38', fontSize: 30 }} />
              <Engineering sx={{ color: '#bc6c25', fontSize: 30 }} />
              <Engineering sx={{ color: '#283618', fontSize: 30 }} />
            </Box>
          </Box>
        )}
        
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: '#283618',
            fontWeight: 'bold',
            mb: 3,
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#606c38',
            fontSize: '1.1rem',
            lineHeight: 1.6,
          }}
        >
          {message}
        </Typography>
        
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid #bc6c25',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#bc6c25',
              fontStyle: 'italic',
            }}
          >
            Coming soon...
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default UnderConstruction;