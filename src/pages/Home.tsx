
import { useState } from 'react'
import {MovieList} from '../components/MovieList'

export const Home = () => {
    const [title, setTitle] = useState('batman')

    const handleSetTitle = (e: any) => {
        setTitle(e.target.value)
    }

    return (
        <>
            <div className="container pioneer-imdb-container">
                <div className="row">
                    <div className="pioneer-search-container">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="text-center">IMDB Pioneer Dev AI</h1>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                                <input type="text" value={title} onChange={handleSetTitle} placeholder="Enter a movie title.." className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <h1>Movies</h1>
                </div>
                <div className="row row-cols-2 row-cols-md-3 g-4">
                    <MovieList title={title}/>
                </div>
            </div>
        </>
    )
}
