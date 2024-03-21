import React from 'react';
import '../styles/Categories.scss';
import {Carousel} from './Carousel';

const Categories = ({ title }) => (
  <div className="categories">
    <h5 className="categories__title">{title}</h5>
    < Carousel />
  </div>
);

export default Categories;