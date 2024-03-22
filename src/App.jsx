import { useState } from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import CategoriesJun from './components/CategoriesJun';
import CategoriesMarch from './components/CategoriesMarch';

function App() {

  return (
    <>
      < Header />
      < Search />
      < Categories title="New in April 2024 | Netflix"/>
      < CategoriesJun title="New in January 2024 | Netflix"/>
      < CategoriesMarch title="New in March 2024 | Netflix"/>
    </>
  )
}

export default App
