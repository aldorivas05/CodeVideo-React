import React from 'react';
import '../styles/Search.css';


const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input className="input" type="text" placeholder="Buscar..."  />
    </section>

);

export default Search;