import React from 'react';
import '../styles/CategoriesMarch.scss';
import { NewInMarch } from './NewInMarch';

const CategoriesMarch = ({ title }) => (
  <div className="categoriesMarch">
    <h5 className="categoriesMarch__title">{title}</h5>
    <NewInMarch />
  </div>
);

export default CategoriesMarch;