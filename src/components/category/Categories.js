import React from 'react';
import './styles/Categories.css';
//components
import Category from './Category';

const Categories = () => {
  return (
    <section className='categories'>
      <h2>Categories</h2>
      <div className='categories__wrapper'>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </section>
  );
};

export default Categories;
