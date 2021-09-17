export default (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK_TO_FAVOURITES':
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };

    case 'REMOVE_BOOK_FROM_FAVOURITES':
      return {
        ...state,
        favourites: state.favourites.filter(book => book.id !== action.payload),
      };

    case 'SET_BOOK_AS_READ':
      return {
        ...state,
        read: [action.payload, ...state.read],
      };

    case 'SET_BOOK_AS_NOT_READ':
      return {
        ...state,
        read: state.read.filter(book => book.id !== action.payload),
      };

    default:
      return state;
  }
};
