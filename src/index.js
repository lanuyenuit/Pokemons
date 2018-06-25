import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from "./myStore";
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import PokemonItem from "./components/PokemonItem"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/pokemonItem/:id'
                       render={ (props) => {
                           return (<PokemonItem/>)
                       }


                       }
                />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'))
registerServiceWorker()
