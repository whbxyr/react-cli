import { SET_PROGRESS_VISIBILITY, SET_FILE, buildConstant } from './constants'

const uploadActionCreator = (PREFIX) => ({
  // 触发上传提示与上传进度条的显示
  setProgressVisibility: (visible) => ({
    type: buildConstant(PREFIX, SET_PROGRESS_VISIBILITY),
    visible: visible
  }),
  // 设置上传文件的信息
  setFile: (filename, size) => ({
    type: buildConstant(PREFIX, SET_FILE),
    filename: filename,
    size: size
  })
})

export default uploadActionCreator
