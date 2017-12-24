import { combineReducers } from 'redux'
import upload from './components/Upload/reducer'

export default combineReducers({
  upload: upload('app')
})
