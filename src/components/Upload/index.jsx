import React, { Component } from 'react'
import './index.less'
// import actionCreator from './action'

class Upload extends Component {
  // onDrop 事件以及点击上传事件的监听函数
  uploadHandler(e) {
    var file = null
    if (e.dataTransfer) {
      file = e.dataTransfer.files[0]
    } else {
      file = e.target.files[0]
    }
    console.log(file.name)
  }
  // onDragOver 事件的监听函数
  onDragOverHandler(e) {
    e.preventDefault()
    e.stopPropagation()
  }
  render() {
    return (
      <div className='upload'
        onDrop={this.uploadHandler.bind(this)}
        onDragOver={this.onDragOverHandler}>
        <div className='target'>
          <input type='file' id='upload_input' onChange={this.uploadHandler.bind(this)} />
          <label htmlFor='upload_input'>
            <div className='tip'>点击或者拖拽上传文件</div>
          </label>
        </div>
        <div className='progress'>
          <div className='progress_ctn'>
            <div className='progress_banner' />
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
