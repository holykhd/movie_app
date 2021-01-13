import React from "react";
import {HashRouter, Route} from "react-router-dom";
import HomeRouter from "./routes/HomeRouter";
import AboutRouter from "./routes/AboutRouter";
import NavigationRouter from "./routes/NavigationRouter";
import MovieRouter from "./routes/MovieRouter";
import MovieDetailRouter from './routes/MovieDetailRouter';
import FooterRouter from "./routes/FooterRouter";
import './components/Reset.css';
import './components/Style.css';

function App(){
    return(
        <div>
            <HashRouter>
                <NavigationRouter />
                <Route path='/' exact={true} component={HomeRouter} />
                <Route path='/movie' component={MovieRouter} />
                <Route path='/about' component={AboutRouter} />
                <Route path='/movieDetail' component={MovieDetailRouter} />
            </HashRouter>
            <FooterRouter />
        </div>
    )
}

export default App;