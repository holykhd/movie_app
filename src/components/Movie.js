import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import {Link} from "react-router-dom";


function Movie({id, title, year, summary, poster, genres}){
    return (
        <Link to={{
            pathname: '/movieDetail',
            state: {
                id,
                title,
                year,
                summary,
                poster,
                genres
            }
        }}>
            <section className="movie-list">
                <div className="innor">
                    <ul>
                        <li>
                            <div className="movie-card">
                                <h4 className="movie-title">{title} <span>{year}</span></h4>
                                <div className="movie-data">
                                    <div className="movie-img">
                                        <img src={poster} alt={title} title={title}/>
                                    </div>
                                    <p className="description">{summary.slice(0,160)}...</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </Link>
    )
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