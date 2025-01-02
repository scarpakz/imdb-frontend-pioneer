/**
 * Main Movie Card
 */
import {TypeMovieCard} from '../constant/types'

export const MovieCard = (item: TypeMovieCard) => {
    return (
        <>
            <div className="col" data-aos="fade-right" >
                <div className="card pioneer-card">
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