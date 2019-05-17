import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                    <div className="App container-fluid pl-0 pr-0">
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                    </div>
            </BrowserRouter>
        );
    }
}

export default App;