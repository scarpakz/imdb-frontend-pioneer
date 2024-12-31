import { MovieCard } from "./MovieCard"
import { useEffect, useState } from "react"
import axios from "axios"
import {TypeMovieCard} from '../constant/types'

const renderCardElement = (i: TypeMovieCard[]) => {
    return i.map((item: TypeMovieCard) => {
        <MovieCard 
            Title={item.Title}
            Year={item.Year}
            imdbID={item.imdbID}
            Type={item.Type}
            Poster={item.Poster}
        />
    });
}

export const MovieList = () => {
    const [items, setItems] = useState([])

    const requestItems = async () => {
        const data = await axios
        .get('http://localhost:5000/api/v1/movies?title=batman')
        .then((response: any) => {
            return response.data.Search
        })
        setItems(data)
    }

    useEffect(() => {
        requestItems()
    }, []);

    return (
        <>
            {
                items.length > 0 ? items.map((item: any) => (
                    <MovieCard 
                        {...item}
                    />
                )) :
                <p>Loading...</p>
            }
        </>
    )
}