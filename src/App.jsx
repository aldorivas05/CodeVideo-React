import { useState } from 'react'
import './styles/App.scss'
import { Header } from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'

function App() {

  return (
    <>
      < Header />
      < Search />
      < Categories title="Tendencias"/>
      < Categories title="Peliculas"/>
      < Categories title="Series"/>
    </>
  )
}

export default App
