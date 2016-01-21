import '../main.css';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app.jsx';
import {getDailySchedule} from './utils/api';

getDailySchedule();

ReactDOM.render(<App />, document.getElementById('app'));
