import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import CounterApp from './CounterApp';
import MusicGenerationApp from './MusicGenerationApp/MusicGenerationApp';
// import PortfolioApp from './Portfolio/PortfolioApp.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './MusicGenerationApp/store'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <MusicGenerationApp />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <BrowserRouter>
//     <PortfolioApp />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
