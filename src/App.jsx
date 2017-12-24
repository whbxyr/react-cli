import React, { Component } from 'react'
import Upload from 'components/Upload'
import { connect } from 'react-redux'

@connect(
  state => ({ ...state }),
  dispatch => ({
    dispatch: dispatch
  })
)
class App extends Component {
  render () {
    return (
      <div className='App'>
        <Upload
          prefix='app'
          url=''
          dispatch={this.props.dispatch}
        />
      </div>
    )
  }
}

export default App
