import React from 'react';
import '../styles/Categories.scss';
// import {Carousel} from './Carousel';
import { NewInApril } from './NewInApril';

const Categories = ({ title }) => (
  <div className="categories">
    <h5 className="categories__title">{title}</h5>
    <NewInApril />
  </div>
);

export default Categories;