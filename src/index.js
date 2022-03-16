import React from 'react';
import ReactDOM from 'react-dom';
import StyleGlobal from './utils/styles/StyleGlobal.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import Header from './components/Header/index.jsx'


ReactDOM.render(
  <React.StrictMode>
        <StyleGlobal />
        <Header />
        <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

