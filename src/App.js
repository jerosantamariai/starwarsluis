import React from 'react';
import injectContext from './store/appContext';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Starships from './views/starships';
import StarshipDetail from './views/starshipdetail';
import StarshipDetail2 from './views/starshipdetail2';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <img src={"http://localhost:8080/img/logo.png"} alt="logo" height="100" />
                    </div>
                </div>
                <Switch>
                    <Route exact path="/starship-by-id/:id" component={StarshipDetail} />
                    <Route exact path="/starship-by-name/:name" component={StarshipDetail2} />
                    <Route exact path="/" component={Starships} />
                    <Route render={() => <h1>Not Found</h1>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default injectContext(App);