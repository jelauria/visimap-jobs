import React, { Component } from 'react'

class MainListing extends Component {
  render () {
    return (
      <div id="main-job" className="col-8 indeed-desc">
        <div className="row">
          <div className="col">
            <h3
              dangerouslySetInnerHTML={{ __html: this.props.currList[this.props.index].title }}
            >
            </h3>
            <h4>{this.props.currList[this.props.index].company.display_name}</h4>
            <h6>{this.props.currList[this.props.index].created.substring(0, 10)}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              id="apply"
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                window.open(this.props.currList[this.props.index].redirect_url, '_blank')
              }}
            >
                            Apply
            </button>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            dangerouslySetInnerHTML={{ __html: this.props.currList[this.props.index].description }}
          >
          </div>
        </div>
      </div>
    )
  }
}

export default MainListing
