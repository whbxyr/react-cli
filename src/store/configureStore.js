import { createStore, compose } from 'redux'
import rootReducer from '../rootReducer'
import middlewares from './middlewares'

const enhancer = compose(
  middlewares,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
