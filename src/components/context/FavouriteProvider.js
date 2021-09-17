import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
  favourites: localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites'))
    : [],
  read: localStorage.getItem('read')
    ? JSON.parse(localStorage.getItem('read'))
    : [],
};

//create context
export const FavouriteContext = createContext(initialState);

//provider components
export const FavouriteProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //add to local storage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(state.favourites));
    localStorage.setItem('read', JSON.stringify(state.read));
  }, [state]);

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
    <FavouriteContext.Provider
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
    </FavouriteContext.Provider>
  );
};
