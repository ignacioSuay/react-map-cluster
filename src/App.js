import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import MyMap from "./MyMap";
import MyTable from "./MyTable";
import {createStore} from "redux";
import tableData from "./reducer";
import {Provider} from "react-redux";
import {Col} from "react-bootstrap"
import { SocialIcon } from 'react-social-icons';

//import StupidComponent from './components/StupidComponent';

const reduxStore = createStore(tableData);
window.store = reduxStore

class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">MAP CLUSTER TABLE</h1>
                    </header>
                    <MyMap isMarkerShown={true}/>
                    <Col md={6} s={6} mdOffset={3} xsOffset={3} className="table">
                        <MyTable/>
                    </Col>
                    <SocialIcon url="http://twitter.com/ignacio_suay" className="icon"/>
                    <SocialIcon url="https://github.com/ignacioSuay"  className="icon" color="black"/>
                    <SocialIcon url="https://uk.linkedin.com/pub/ignacio-suay-mas/44/860/8b0" className="icon" />
                </div>

            </Provider>
        );
    }
}

export default App;
