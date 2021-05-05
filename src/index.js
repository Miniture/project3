import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import counter from "./reducer";
import App from "./App";
import Bank from "./Bank";


var store = createStore(counter);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Bank />
            <App />
        </Provider>
    </div>,
    document.querySelector("#container")
);