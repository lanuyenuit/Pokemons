import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import PokemonItem from './components/PokemonItem'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import store from './myStore'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route
          path='/pokemonItem/:id'
          component={PokemonItem}
        />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'))
