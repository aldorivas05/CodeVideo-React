import { useState } from 'react'
import './styles/App.css'
import { Header } from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'

function App() {
  const [count, setCount] = useState(0)

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
