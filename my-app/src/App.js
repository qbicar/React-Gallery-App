import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-browser-router'
import NoResults from './components/NotFound';
import axios from 'axios';
import Image from './components/Image';
import ImageList from './components/ImageList';
import Search from './components/Search';
import Navi from './components/Nav';
import apiKey from './config.js';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch()
  }
  performSearch = (query = "greyscale") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          lions:[],
          wedding:[],
          flowers:[],
          images: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error Fetching Data", error)
        this.setState({
          loading: false
        })
      })
  }
  render() {

    return (
      <div>
        <div className="main">
          <Search onSearch={this.performSearch} />
        </div>
        <Navi onSearch={this.performSearch} />
        <div className="main-content">
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <ImageList data={this.state.images} />
          }
        </div>

        
        <BrowserRouter>
          <Switch>
            {/* <Route path="/components/NotFound" component={NoResults} /> */}
            <Route path="/components/NotFound" component={NoResults} />
            <Route path="/flowers"  />
            <Route path="/wedding" render={() => <Redirect to="/wedding" />} />
            <Route path="/lions" render={() => <Image data={this.state.lions} />} />
            
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
