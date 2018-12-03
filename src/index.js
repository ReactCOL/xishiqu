import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css'

import App from './App';
// 路由
import { HashRouter as Router} from "react-router-dom";
import * as serviceWorker from './libs/serviceWorker';
//请求
import axios from 'axios';
React.axios = axios;


ReactDOM.render(
	<Router>
	<App />
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
