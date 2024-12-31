export const Home = () => {
    return (
        <>
            <div className="container pioneer-imdb-container">
                <div className="row">
                    <div className="pioneer-search-container">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="text-center">IMDB Pioneer Dev AI</h1>
                            <div className="input-group input-group-lg">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                                <input type="text" placeholder="Enter a movie title.." className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Movies</h1>
                    </div>
                    <div className="col-md-4 col-sm-12 pioneer-card-container">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 pioneer-card-container">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 pioneer-card-container">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
