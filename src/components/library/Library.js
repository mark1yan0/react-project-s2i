import React, { useContext, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './styles/Library.css';
//state
import { LibraryContext } from '../context/LibraryProvider';
//components
import Button from '../buttons/Button';

//components
import Book from '../books/Book';

const Library = () => {
  //state
  //library, filter all
  const [library, setLibrary] = useContext(LibraryContext);
  const [showAll, setShowAll] = useState(true);

  //state read
  const [filteredRead, setFilteredRead] = useState([]);
  const [showRead, setShowRead] = useState(false);
  //state not read
  const [filteredNotRead, setFilteredNotRead] = useState([]);
  const [showNotRead, setShowNotRead] = useState(false);

  useEffect(() => {
    setFilteredRead(library.filter(book => book.read === true));
    setFilteredNotRead(library.filter(book => book.read === false));
  }, [library]);

  function hideLibrary() {
    let library = document.querySelector('.library');
    library.classList.remove('library__active');
  }

  return (
    <div className='library'>
      <div className='library__heading'>
        <h1>La mia Libreria</h1>
        <FaTimes
          className='libary__heading__close__btn'
          onClick={hideLibrary}
        />
      </div>
      <div className='library__filters'>
        <Button
          text='Tutti'
          event={() => {
            setShowAll(true);
            setShowRead(false);
            setShowNotRead(false);
          }}
        />
        <Button
          text='Letti'
          event={() => {
            setShowAll(false);
            setShowRead(true);
            setShowNotRead(false);
          }}
        />
        <Button
          text='Non letti'
          event={() => {
            setShowAll(false);
            setShowRead(false);
            setShowNotRead(true);
          }}
        />
      </div>
      <section className='library__items'>
        {showAll
          ? library.map(item => (
              <Book
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                author={item.author}
                category={item.category}
                favourite={item.favourite}
                read={item.read}
                targetBook={item}
              />
            ))
          : showRead
          ? filteredRead.map(item => (
              <Book
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                author={item.author}
                category={item.category}
                favourite={item.favourite}
                read={item.read}
                targetBook={item}
              />
            ))
          : showNotRead &&
            filteredNotRead.map(item => (
              <Book
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                author={item.author}
                category={item.category}
                favourite={item.favourite}
                read={item.read}
                targetBook={item}
              />
            ))}
      </section>
    </div>
  );
};

export default Library;
