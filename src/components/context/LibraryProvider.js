import React, { useState, createContext } from 'react';

export const LibraryContext = createContext();

const LibraryProvider = props => {
  //state
  const [library, setLibrary] = useState([]);

  return (
    <LibraryContext.Provider value={[library, setLibrary]}>
      {props.children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
