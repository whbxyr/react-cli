import { combineReducers } from 'redux'
import { SET_PROGRESS_VISIBILITY, SET_FILE, buildConstant } from './constants'

const uploadReducer = (PREFIX) => {
  // 控制上传提示与上传进度条的显示
  const progressVisibility = (state = false, action) => {
    if (action.type === buildConstant(PREFIX, SET_PROGRESS_VISIBILITY)) {
      state = action.visible
    }
    return state
  }

  // 设置文件信息
  const file = (state = { filename: '', size: '' }, action) => {
    if (action.type === buildConstant(PREFIX, SET_FILE)) {
      state = {
        filename: action.filename,
        size: action.size
      }
    }
    return state
  }

  return combineReducers({
    progressVisibility,
    file
  })
}

export default uploadReducer
