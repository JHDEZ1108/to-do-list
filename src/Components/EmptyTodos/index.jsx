import React from 'react';
import { Box, Typography } from '@mui/material';

function EmptyTodos() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h6">¡Crea tu primer To Do!</Typography>
    </Box>
  );
}

export { EmptyTodos };
