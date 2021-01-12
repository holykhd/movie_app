import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, title, year, summary, poster, genres}){
    return <div>
        <h4>{title}<span>{year}</span></h4>
        <ul>
            {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
            ))}
        </ul>
        <p className={summary}>{summary.slice(0, 100)}</p>
        <p><img src={poster} alt={title} title={title}/></p>
    </div>

}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;