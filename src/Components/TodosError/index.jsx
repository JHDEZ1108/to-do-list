import React from 'react';
import { Box, Typography } from '@mui/material';

function TodosError() {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography variant="h6" color="error">
        Desespérate, hubo un error...
      </Typography>
    </Box>
  );
}

export { TodosError };