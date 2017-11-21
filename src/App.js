import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import MyMap from "./MyMap";
import MyTable from "./MyTable";
import {createStore} from "redux";
import tableData from "./reducer";
import {Provider} from "react-redux";
import StupidComponent from './components/StupidComponent';

const reduxStore = createStore(tableData);
window.store = reduxStore

class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <StupidComponent/>
                    <MyMap isMarkerShown={true}/>
                    <MyTable/>
                </div>
            </Provider>
        );
    }
}

export default App;
