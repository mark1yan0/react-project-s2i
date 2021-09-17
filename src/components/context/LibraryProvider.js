import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  favourites: [],
  read: [],
};

//create context
export const LibraryContext = createContext(initialState);

//provider components
export const LibraryProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const addBookToFavourites = book => {
    dispatch({ type: 'ADD_BOOK_TO_FAVOURITES', payload: book });
  };

  const removeBookFromFavourites = id => {
    dispatch({ type: 'REMOVE_BOOK_FROM_FAVOURITES', payload: id });
  };

  const setBookAsRead = book => {
    dispatch({ type: 'SET_BOOK_AS_READ', payload: book });
  };

  const setBookAsNotRead = id => {
    dispatch({ type: 'SET_BOOK_AS_NOT_READ', payload: id });
  };

  return (
    <LibraryContext.Provider
      value={{
        favourites: state.favourites,
        read: state.read,
        addBookToFavourites,
        removeBookFromFavourites,
        setBookAsRead,
        setBookAsNotRead,
      }}
    >
      {props.children}
    </LibraryContext.Provider>
  );
};
