export const MovieDetail = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="pioneer-detail-content">
                            <h1>Superman</h1>
                            <span>2025</span>
                            <div className="pioneer-detail-poster-image-group">
                                <img src="https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2024/05/16134834/EWKA_Superman_Poster.jpg" alt="superman" />
                            </div>
                            <div className="pioneer-detail-genre">
                                <span>Superhero</span>
                                <span>Fantasy</span>
                                <span>Sci-Fi</span>
                            </div>
                            <div className="pioneer-cast-group">
                                <div className="pioneer-rating">
                                    {/* Change to star later */}
                                    <span><strong>Ratings:</strong> 5</span>
                                </div>
                            </div>
                            <p>
                                Follows the titular superhero as he reconciles his heritage with his human upbringing. He is the embodiment of truth, justice and the human way in a world that views this as old-fashioned.
                            </p>
                            <div className="pioneer-cast-group">
                                <h4><strong>Director:</strong> James Gunn</h4>
                            </div>
                            <div className="pioneer-cast-group">
                                <h4>Cast</h4>
                                <ul>
                                    <li>James Hart</li>
                                    <li>Jerry Siegel</li>
                                    <li>Joe Shuster</li>
                                    <li>David Corenswet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}