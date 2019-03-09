import React, {Component} from 'react';
import './App.css';
import Converter from './components/Converter';

class App extends Component {
    render() {
        return ( 
            <div className="app">
                <Converter />
            </div>
        );
    }
}

export default App;