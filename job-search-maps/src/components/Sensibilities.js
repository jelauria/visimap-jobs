import React, { Component } from 'react'
import Dropdown from './Dropdown'

class Sensibilities extends Component {
  render () {
    return (
      <div className="row sensibilities">
        <div className="col-6">
          <Dropdown
            alterStyle={(newStyle) => {
              this.props.changeStyle(newStyle)
            }}
          />
        </div>
      </div>
    )
  }
}

export default Sensibilities
