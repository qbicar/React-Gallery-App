import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';


// App components
import Search from './components/Search';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NoResults from './components/NotFound';



export default class App extends Component {



  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Search />
          <Nav />

          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/:name" component={Gallery} />
            <Route component={NoResults} />
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}


