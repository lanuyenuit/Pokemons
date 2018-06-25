import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import reducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
))

export default store
