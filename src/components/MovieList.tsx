import { MovieCard } from "./MovieCard"
import { useEffect, useState } from "react"
import axios from "axios"
import {TypeMovieCard} from '../constant/types'

interface MovieListProps {
    title: string;
}
export const MovieList: React.FC<MovieListProps> = ({title}) => {
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
                    <MovieCard
                        {...item}
                    />
                )) :
                <p>Empty</p>
            }
        </>
    )
}