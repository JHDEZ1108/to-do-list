import React from 'react';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  width: '100%',
  maxWidth: '600px',
  '& label.Mui-focused': {
    color: '#b0c2f2',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#b0c2f2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#b0c2f2',
    },
    '&:hover fieldset': {
      borderColor: '#b0c2f2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#b0c2f2',
    },
  },
});

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
      <StyledTextField
        variant="outlined"
        label="Buscar ToDo..."
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
    </Box>
  );
}

export { TodoSearch };
