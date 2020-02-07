import React, { Component } from 'react'
import Sensibilities from './components/Sensibilities'
import Search from './components/Search'
import PageTitle from './components/PageTitle'
import ListingsTitle from './components/ListingsTitle'
import TinyListings from './components/TinyListings'
import MainListing from './components/MainListing'
import ListingsNavigation from './components/ListingsNavigation'
import MapsTitle from './components/MapTitle'
import LocationsMap from './components/LocationsMap'
import { Helmet } from 'react-helmet'

const ADZUNA_ID = 'd4b1d5f1'
const ADZUNA_KEY = '135e21e38100598c1a2b4b262e61d01f'
const GOOGLE_KEY = 'AIzaSyBNJDz4HlA1RvD41b6v7jQCVPSoWRj5oHU'
const PROXY = 'https://sheltered-citadel-33560.herokuapp.com/'
const defaultListings = [{
  title: 'Job Title',
  company: { display_name: 'Company' },
  created: '2019-11-29T08ksjkf',
  redirect_url: 'http://www.valvesoftware.com/en/jobs?job_id=14',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic laborum, culpa optio velit recusandae consectetur voluptates minima dolore rem eligendi ex.',
  longitude: -122.3448,
  latitude: 47.6147
}, {
  title: 'Job Title',
  company: { display_name: 'Company' },
  created: '2019-12-29T08ksjkf',
  longitude: -122.3343,
  latitude: 47.6015
}, {
  title: 'Job Title',
  company: { display_name: 'Company' },
  created: '2019-13-29T08ksjkf',
  longitude: -122.3321,
  latitude: 47.6062
}]

class App extends Component {
  constructor (props) {
    super(props)
    this.mapElement = React.createRef()
    this.state = {
      job: 'nurse',
      queryLocation: 'new%20york',
      currListings: defaultListings,
      page: 1,
      numPages: 1,
      mainListing: 0,
      styleSheet: 'medium-style.css'
    }
  }

  componentDidMount () {
    this.queryAPI()
  }

  queryAPI () {
    const currUrl = `${PROXY}https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${ADZUNA_ID}&app_key=${ADZUNA_KEY}&results_per_page=24&what=${this.state.job}&where=${this.state.queryLocation}&distance=5&sort_by=relevance`
    const fetchPromise = fetch(currUrl)
    fetchPromise.then((response) => {
      response.json().then((data) => {
        if (response.status === 200 && data.results.length > 2) {
          this.setState({
            page: 1,
            mainListing: 0,
            currListings: data.results,
            numPages: Math.trunc(data.results.length / 3)
          }, () => { this.mapElement.current.updateMarkers(this.state.currListings) })
        }
      })
    })
  }

  render () {
    return (
      <div>
        <Helmet>
          <link rel="stylesheet" type="text/css" href={this.state.styleSheet}/>
        </Helmet>
        <div className="container">
          <PageTitle/>
          <Sensibilities
            changeStyle={(stylePath) => {
              this.setState({
                styleSheet: stylePath
              })
            }}
          />
          <Search
            onSubmit={() => {
              this.queryAPI()
            }}
            inputJob={(newJob) => {
              this.setState({
                job: newJob
              })
            }}
            inputLoc={(newLoc) => {
              this.setState({
                queryLocation: newLoc
              })
            }}
          />
        </div>
        <div className="indeed-container container">
          <ListingsTitle/>
          <div className="row">
            <TinyListings
              currList={this.state.currListings}
              pageIndex={this.state.page}
              changeMain={(indexMain) => {
                this.setState({
                  mainListing: indexMain
                })
              }}
            />
            <MainListing
              currList={this.state.currListings}
              index={this.state.mainListing}
            />
            <ListingsNavigation
              currPage={this.state.page}
              lastPage={this.state.numPages}
              fwdPage={() => {
                this.setState({
                  page: this.state.page + 1
                })
              }}
              bkPage={() => {
                this.setState({
                  page: this.state.page - 1
                })
              }}
            />
          </div>
        </div>
        <div className="container maps-container">
          <MapsTitle/>
          <div className="row col">
            <LocationsMap
              ref={this.mapElement}
              apiKey = {GOOGLE_KEY}
              results = {this.state.currListings}
              alterMain={(indexMain) => {
                this.setState({
                  mainListing: indexMain
                })
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
