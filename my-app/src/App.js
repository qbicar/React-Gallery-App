import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-browser-router'
import NoResults from './components/NotFound'
import axios from 'axios'
import './index.css';
import './config.js';
import ImageList from './components/ImageList'
import Search from './components/Search'
import Navi from './components/Nav'
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
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1&text=safari&extras=url_o`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error Fetching DAta", error)
        this.setState({
          loading: false,
        })
      })

  }
  performSearch = (query = "fish") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo

        })
      })
      .catch(error => {
        console.log("Error Fetching Data", error)
      })
  }
  render() {

    return (
      <div>
        <div className="main">
          <Search onSearch={this.performSearch} />
        </div>
        <Navi />
        <div className="main-content">
          {
            (this.state.loading)

              ? <p>Loading...</p>
              : <ImageList data={this.state.images} />
          }
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/components/NotFound" component={NoResults} />
            {/* <Route path="/search/wedding" url=`${query}` /> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


// const App = () => (
//   <BrowserRouter>
//     <div className="App">
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/Nav" component={Nav} />
//         <Route path="/NotFound" component={NotFound} />
//       </Switch>
//     </div>
//   </BrowserRouter>
// )

// export default App;
