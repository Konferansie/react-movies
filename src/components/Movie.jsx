import React from 'react';

const Movie = (props) => {

    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props

    return (
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ? (
                        <img src={`https://via.placeholder.com/300x400/?text=${title}`} alt="placeholder" />
                    ):(
                        <img className="activator" src={poster} alt={title}/>
                    )
                
                }

              
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>
                    {type} <span className="right">{year}</span>
                </p>
            </div>

        </div>
    );
};

export default Movie;