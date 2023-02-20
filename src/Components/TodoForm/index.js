import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  TextField,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#b0c2f2',
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

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const handleChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    handleClose();
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle sx={{ pt: 4 }}>Añadir To Do</DialogTitle>
      <DialogContent 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl fullWidth>
          <CustomTextField
            label="¿Qué debes hacer?"
            multiline
            rows={3}
            variant="outlined"
            value={newTodoValue}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 4 }}>
        <Box sx={{ mx: 3 }}>
          <Button onClick={handleClose} color="error" variant="contained" style={{ backgroundColor: '#ff6961' }}>
            Cancelar
          </Button>
        </Box>
        <Box sx={{ mx: 3 }}>
          <Button onClick={handleSubmit} color="primary" variant="contained" style={{ backgroundColor: '#b0c2f2' }}>
            Añadir
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export { TodoForm };