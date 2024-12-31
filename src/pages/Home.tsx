import {SearchField} from '../components/SearchField'
import {MovieCard} from '../components/MovieCard'

export const Home = () => {
    return (
        <>
            <div className="container pioneer-imdb-container">
                <div className="row">
                    <SearchField />
                </div>
                <div className="col-md-12">
                    <h1>Movies</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <MovieCard />
                </div>
            </div>
        </>
    )
}
