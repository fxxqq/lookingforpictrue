import React, { Component } from 'react';
import './stylesheets/App.css';
import CSC648 from './views/parts/CSC648';
import Nav from './views/Nav';
import Main from './views/Main';
import SearchBar from './views/SearchBar';
class App extends Component {
    render() {
        return (
                <div>
                    <CSC648 />
                    <Nav />
                    <SearchBar />
                    <Main />
                </div>
                );
    }
};

export default App;
