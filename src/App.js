import React from "react";
import {HashRouter, Route} from "react-router-dom";
import HomeRouter from "./routes/HomeRouter";
import AboutRouter from "./routes/AboutRouter";
import NavigationRouter from "./routes/NavigationRouter";
import MovieRouter from "./routes/MovieRouter";
import './components/Reset.css';
import './components/Style.css';
import FooterRouter from "./routes/FooterRouter";

function App(){
    return(
        <div>
            <HashRouter>
            <NavigationRouter />
                <Route path='/' exact={true} component={HomeRouter} />
                <Route path='/movie' component={MovieRouter} />
                <Route path='/about' component={AboutRouter} />
            </HashRouter>
            <FooterRouter />
        </div>
    )
}

export default App;