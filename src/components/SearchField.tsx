/**
 * Main Search Component
 */
export const SearchField = () => {
    return (
        <>
            <div className="pioneer-search-container">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1 className="text-center">IMDB Pioneer Dev AI</h1>
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
                        <input type="text" placeholder="Enter a movie title.." className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}