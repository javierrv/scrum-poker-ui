import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DeckComponent from './components/deck/DeckComponent';
import UserCardComponent from './components/user-card/UserCardComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UserCardComponent />
    <DeckComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
