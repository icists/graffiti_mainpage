import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/home'
import Contact from './components/home/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container-fluid pl-0 pr-0 ml-0 mr-0">
          <Navbar />
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;