import React from 'react';
import axios from "axios";
class App extends React.Component{
    state = {
        isLoading: true
    };

    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        console.log(movies)
    }

    componentDidMount() {
        this.getMovies();
        // setTimeout(() => {
        //     this.setState({isLoading: false})
        // }, 3000);
    }

    render(){
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? "Loading...." : "Welcome to my Page"}
            </div>
        );
    }
}

export default App;
