import { MovieCard } from "./MovieCard"
import { useEffect, useState } from "react"
import axios from "axios"

import {TypeMovieCard} from '../constant/types'
import {Spinner} from '../components/Spinner'
import { Link } from "react-router-dom"

interface MovieListProps {
    title: string;
}
export const MovieList= ({title} : MovieListProps) => {
    const [items, setItems] = useState([])

    const requestItems = async () => {
        const data = await axios
        .get(`http://localhost:5000/api/v1/movies?title=${title}`)
        .then((response: any) => {
            return response.data.Search
        })
        setItems(data)
    }

    useEffect(() => {
        requestItems()
    }, [title]);

    return (
        <>
            {
                items ? items.map((item: TypeMovieCard) => (
                    <Link to={`/movie/${item.imdbID}`} key={item.imdbID}>
                        <MovieCard
                            key={item.imdbID}
                            {...item}
                        />
                    </Link>
                )) :
                // or empty
                <Spinner /> 
            }
        </>
    )
}