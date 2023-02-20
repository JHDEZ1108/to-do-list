import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function TodoList(props) {
  const { children, render, error, loading, totalTodos, searchedTodos, searchText, onError, onLoading, onEmptyTodos, onEmptySearchResults } = props;
  const renderFunc = children || render;
  
  return (
    <Box sx={{ marginTop: '4rem' }}>
      {error && onError()}
      {loading && onLoading()}

      {(!loading && !totalTodos) && onEmptyTodos()}

      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchText)}

      {(!loading && !error) && searchedTodos.map(renderFunc)}
    </Box>
  );
}

TodoList.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  totalTodos: PropTypes.number,
  searchedTodos: PropTypes.array,
  searchText: PropTypes.string,
  onError: PropTypes.func,
  onLoading: PropTypes.func,
  onEmptyTodos: PropTypes.func,
  onEmptySearchResults: PropTypes.func
}

export { TodoList };
