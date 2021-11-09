import React, { useEffect,useState } from 'react';
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs';

export default function Home() {
    const [ keyword, setKeyword ] = useState('')
    const [path, pushLocation ] = useLocation()
    
    const { gifs } = useGifs()
    

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder= "Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
            <button>Search</button>
        </form>
        <h3 className="App-title">Ultima busqueda</h3>
        <ListOfGifs gifs={gifs}/>
        
        </>
    )
}