import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './components/App';
import "../scss/main.scss";

let colorsArr = ['white', 'yellow'];

render(
    <App />,
    document.getElementById('root')
);
