import React, { Component } from 'react'

class ListingsNavigation extends Component {
  render () {
    const atStart = this.props.currPage <= 1
    const atEnd = this.props.currPage >= this.props.lastPage
    return (
      <div className="row container indeed-job-page-navigation">
        <div className="col-4">
          <i
            className={atStart ? 'hidden' : 'arrow fa fa-chevron-left fa-2x'}
            id="back-button"
            aria-hidden="true"
            onClick={(e) => {
              e.preventDefault()
              this.props.bkPage()
            }}
          ></i>
        </div>
        <div className="col-4">
          <h4>Page {this.props.currPage} out of {this.props.lastPage}</h4>
        </div>
        <div className="col-4">
          <i
            className={atEnd ? 'hidden' : 'arrow fa fa-chevron-right fa-2x'}
            id="fwd-button"
            aria-hidden="true"
            onClick={(e) => {
              e.preventDefault()
              this.props.fwdPage()
            }}
          ></i>
        </div>
      </div>
    )
  }
}

export default ListingsNavigation
