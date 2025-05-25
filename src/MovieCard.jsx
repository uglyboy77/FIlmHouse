import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="Movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.title} />
            </div>
            <div>
                <span>{movie.Title}</span>
                <h3>{movie.About}</h3>
            </div>

        </div>
    )
};

export default MovieCard;