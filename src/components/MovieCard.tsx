/**
 * Main Movie Card
 */
import {TypeMovieCard} from '../constant/types'

export const MovieCard = (item: TypeMovieCard) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={item.Poster} className="card-img-top pioneer-card-img" alt={item.Title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        <p>{item.Year}</p>
                    </div>
                </div>
            </div>
        </>
    )
}