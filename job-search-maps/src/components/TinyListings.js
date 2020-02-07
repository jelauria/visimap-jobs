import React, { Component } from 'react'

class TinyListings extends Component {
  render () {
    const index = (this.props.pageIndex - 1) * 3
    return (
      <div className="col-4 indeed-sum">
        <div id="job-1" className="job">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              this.props.changeMain(index)
            }}
          >
            <h3
              dangerouslySetInnerHTML={{ __html: this.props.currList[index].title }}
            >
            </h3>
          </a>
          <h4>{this.props.currList[index].company.display_name}</h4>
          <h6>{this.props.currList[index].created.substring(0, 10)}</h6>
        </div>
        <div id="job-2" className="job">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              this.props.changeMain(index + 1)
            }}
          >
            <h3
              dangerouslySetInnerHTML={{ __html: this.props.currList[index + 1].title }}
            >
            </h3>
          </a>
          <h4>{this.props.currList[index + 1].company.display_name}</h4>
          <h6>{this.props.currList[index + 1].created.substring(0, 10)}</h6>
        </div>
        <div id="job-3" className="job">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              this.props.changeMain(index + 2)
            }}
          >
            <h3
              dangerouslySetInnerHTML={{ __html: this.props.currList[index + 2].title }}
            >
            </h3>
          </a>
          <h4>{this.props.currList[index + 2].company.display_name}</h4>
          <h6>{this.props.currList[index + 2].created.substring(0, 10)}</h6>
        </div>
      </div>
    )
  }
}

export default TinyListings
