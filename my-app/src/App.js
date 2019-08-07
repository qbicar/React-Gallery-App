import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-browser-router'
// import Home from './Home'
// import Nav from './Nav'
// import NotFound from './NotFound'
import axios from 'axios'
import './index.css';
import './config.js';
import ImageList from './components/ImageList'
import Search from './components/Search'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    this.performSearch()
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7982d0899471cc0645aeb3e0abf5a3a5&format=json&nojsoncallback=1&text=waterfalls&extras=url_o')
      .then(response => {
        console.log(response)
        this.setState({
          images: response.data
        })
      })
      .catch(error => {
        console.log("Error Fetching DAta", error)
      })

  }
  performSearch = (query = "random") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search?q=${query}&limit=24&api_key=7982d0899471cc0645aeb3e0abf5a3a5`)
      .then(response => {
        console.log(response)
        this.setState({
          images: response.data

        })
        console.log(response)
      })
      .catch(error => {
        console.log("Error Fetching DAta", error)
      })
  }



  render() {
    console.log(this.state.images)
    return (
      <div>
        <div className="main">
          <div className="inner">
            <h1 className="main-title">React Gallery App</h1>
            <Search onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
          <ImageList data={this.state.photos} />
        </div>
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
