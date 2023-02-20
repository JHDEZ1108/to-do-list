import React from 'react';
import { useStorageListener } from './useStorageListener';
import { Dialog, DialogContent, DialogTitle, Button, Box, Typography } from '@mui/material';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  return (
    <Dialog open={show} onClose={toggleShow} PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}>
      <DialogTitle disableTypography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" sx={{ color: 'white' }}>
          ¡Atención!
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <Typography variant="body1" sx={{ color: 'white', marginBottom: '16px', textAlign: 'center' }}>
          Parece que cambiaste tus ToDo en otra pestaña o ventana del navegador.
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', marginBottom: '24px', textAlign: 'center' }}>
          ¿Quieres sincronizar tus ToDo?
        </Typography>
        <Button variant="contained" size="large" onClick={toggleShow} sx={{ borderRadius: '24px' }} style={{ backgroundColor: '#ff6961' }}>
          Sincronizar
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export { ChangeAlert };

