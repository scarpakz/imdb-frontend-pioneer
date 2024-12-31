/**
 * Main Movie Card
 */
import {TypeMovieCard} from '../constant/types'

export const MovieCard = (item: TypeMovieCard) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={item.Poster} className="card-img-top" alt={item.Title} width={"30px"}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        <p>{item.Year}</p>
                        <p>{item.Type}</p>
                    </div>
                </div>
            </div>
        </>
    )
}