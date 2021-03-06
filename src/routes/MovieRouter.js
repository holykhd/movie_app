import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import './MovieRouter.css';

class MovieRouter extends React.Component{
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovies();
    }

    render(){
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading ? <div>
                        <p style={{display: 'flex', justifyContent:'center', flexDirection: 'center', alignItems:'center',fontWeight:'bold', height:'100vh'}}>Movie API Data Loading</p>
                    </div>:
                    movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            genres={movie.genres}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                        />
                    ))}
            </div>
        );
    }
}

export default MovieRouter;
