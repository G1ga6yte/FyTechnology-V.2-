import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./CartContext";
import './index.css';
import App from './App';
import "./Styles/mixin.scss"
import "./Styles/Global.scss"
import "./Styles/font/font.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>
      <App/>
    </CartProvider>
  </BrowserRouter>
);