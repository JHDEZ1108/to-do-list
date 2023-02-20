import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const TodoCounterBox = styled(Box)({
  fontSize: '24px',
  textAlign: 'center',
  margin: '0',
  padding: '48px',
  '&.TodoCounter--loading': {
    opacity: '25%',
  },
});

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <TodoCounterBox className={loading && 'TodoCounter--loading'}>
      <Typography variant="h4">
        Has completado {completedTodos} de {totalTodos} To Do
      </Typography>
    </TodoCounterBox>
  );
}

export { TodoCounter };
