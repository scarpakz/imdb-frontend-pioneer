import {SearchField} from '../components/SearchField'
import {MovieList} from '../components/MovieList'

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
                <div className="row row-cols-2 row-cols-md-4 g-4">
                    <MovieList />
                </div>
            </div>
        </>
    )
}
