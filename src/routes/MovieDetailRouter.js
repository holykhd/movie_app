import React from "react";

class MovieDetailRouter extends React.Component{
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }

    render(){
        const {location} = this.props;
        return(
            <div style={{paddingTop:'300px',margin:'0 auto',width:'100%'}}>
                <p>{location.state.title}</p>
                <p>{location.state.summary}</p>
                <p>{location.state.year}</p>
                <p><img src={location.state.poster} alt={location.state.title} title={location.state.title}/></p>
            </div>
        )
    }
}

export default MovieDetailRouter;