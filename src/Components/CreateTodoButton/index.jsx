import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  backgroundColor: '#b0c2f2',
  boxShadow: '0px 0px 10px #b0c2f2',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '50px',
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  fontWeight: 'bold',
  color: '#FAFAFA',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '64px',
  width: '64px',
  transform: 'rotate(0)',
  transition: '.3s ease',
  zIndex: 1,
  '&:hover': {
    transform: 'rotate(224deg)',
    backgroundColor: '#b0c2f2',
  },
});

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <StyledButton onClick={onClickButton}>+</StyledButton>
  );
}

export { CreateTodoButton };
