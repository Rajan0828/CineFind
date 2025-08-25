import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center pt-6">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search through thousands of movies..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#bb86fc' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: '800px',
          maxWidth: '100%',
          input: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: '#1e1e1e',
            '& fieldset': {
              borderColor: '#bb86fc',
            },
            '&:hover fieldset': {
              borderColor: '#d0a6ff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7b2cbf',
            },
          },
        }}
      />
    </div>
  );
};

export default Search;
