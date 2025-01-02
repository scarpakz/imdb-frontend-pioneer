import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Spinner} from '../components/Spinner'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeMovieDetails } from "../constant/types"

export const MovieDetail = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState<any>(null)

    const requestItems = async () => {
        const data: TypeMovieDetails = await axios
        .get(`http://localhost:5000/api/v1/movie/${id}`)
        .then((response: any) => {
            return response.data
        })
        setMovie(data)
    }

    useEffect(() => {
        AOS.init();
        requestItems()
    },[id])

    return (
        <>
            {
                movie ? 
                <div className="container">
                    <Link to={`/`} className="pioneer-back-btn">
                        <button className="btn btn-danger">Back to homepage</button>
                    </Link>
                    <div className="row" data-aos="fade-right">
                        <div className="col-md-6 col-sm-12">
                            <div className="pioneer-detail-content">
                                <div className="pioneer-detail-poster-image-group">
                                    <img src={movie.Poster} alt={movie.Title}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pioneer-description">
                            <div className="pioneer-detail-genre">
                                <h1>{movie.Title}</h1>
                                <p>{movie.Year}</p>
                                <p>{movie.Runtime}</p>
                                <h4>{movie.Genre}</h4>
                            </div>
                            <div className="pioneer-cast-group">
                                <div className="pioneer-rating">
                                    <span><strong>Ratings:</strong> {movie.imdbRating}</span>
                                </div>
                            </div>
                            <p>
                                {movie.Plot}
                            </p>
                            <div className="pioneer-cast-group">
                                <h4><strong>Director:</strong> {movie.Director}</h4>
                            </div>
                            <div className="pioneer-cast-group">
                                <span><strong>Actors: </strong>{movie.Actors}</span>
                            </div>
                            <div className="pioneer-cast-group">
                                <span><strong>Awards: </strong>{movie.Awards}</span>
                            </div>
                        </div>
                    </div>
                </div>
            :
            <Spinner />
            }
        </>
    )
}