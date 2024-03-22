import React from 'react';
import '../styles/CategoriesJun.scss';
import { NewInJanuary } from './NewInJanuary';

const CategoriesJun = ({ title }) => (
  <div className="categoriesJun">
    <h5 className="categoriesJun__title">{title}</h5>
    <NewInJanuary />
  </div>
);

export default CategoriesJun;