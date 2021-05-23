import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import Mainpage from '../src/pages/MainPage'

ReactDOM.render(
    <BrowserRouter>
        < Mainpage />
    </BrowserRouter>,
    document.getElementById('root'),
);
