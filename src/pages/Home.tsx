
import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MovieList} from '../components/MovieList'

export const Home = () => {
    const [title, setTitle] = useState('batman')

    const handleSetTitle = (e: any) => {
        setTitle(e.target.value)
        if (e.target.value.trim().length === 0) {
            setTitle('batman')
        }
    }
    
    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <>
            <div className="container pioneer-imdb-container">
                <div className="row">
                    <div className="pioneer-search-container">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                            <h1 className="text-center" data-aos="fade-up" >IMDB Pioneer Dev AI</h1>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                                <input type="text" onChange={handleSetTitle} placeholder="Enter a movie title.." className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <h1 data-aos="fade-right" className='text-center'>Movies</h1>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-4 pioneer-card-detail" data-aos="fade-right">
                    <MovieList title={title}/>
                </div>
            </div>
        </>
    )
}
