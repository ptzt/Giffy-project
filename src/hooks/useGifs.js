import {useEffect, useState, useContext} from 'react' 
import getGifs from '../services/getGifs' 
import GifsContext  from '../components/context/GifsContext'

export function useGifs({keyword} = {keyword : null}) {
const [ loading, setLoading ] = useState(false)
const {gifs, setGifs} = useContext(GifsContext)



useEffect(function () {
    setLoading(true)
    //Recuperamos la keyword del localStorage(cache)
    const keywordToUse = keyword ||  localStorage.getItem('lastKeyword') || 'mr robot'

    getGifs({keyword : keywordToUse})
    .then(gifs => {
        setGifs(gifs)
        setLoading(false)
    //Guardamos la keyword en el localStorage   
        localStorage.setItem('lastKeyword', keyword)
    })
}, [keyword])

return {loading, gifs}
}