import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomeButton = () => {
  return (
    <Button
      component={Link}
      to="/"
      variant="contained"
      sx={{
        mb: 2,
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 'bold',
        backgroundColor: '#7c3aed',
        '&:hover': {
          backgroundColor: '#6d28d9',
        },
      }}
    >
      ⬅ Home
    </Button>
  );
};

export default HomeButton;
