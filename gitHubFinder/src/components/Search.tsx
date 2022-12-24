import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({ loadUser }: SearchProps) => {
    // detectando tecla enter
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadUser(userName);
        }
    }
    // Vendo o que o user digitou
    const [userName, setUserName] = useState('');

    return (
        <div className={classes.search}>
            <h2>Busque por usuário:</h2>
            <p>Conheças seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input type="text" placeholder='Digite o nome do usuário'
                    // Pegando o que o user digitou
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search