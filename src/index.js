import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./Font.css";
import ContactUs from './pages/contactUs';
import Bahare from './pages/bahare';
import {  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Exchanges from './pages/exchange/total';
import { CoinPage } from './pages/coins/total';
import MainPage from './pages/mainPage';
import { NotFound } from './pages/404'; 
import { ExchangePage } from './pages/exchange/id/total';                                                                                                                                                                                                                                   
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/exchanges",
    element: <Exchanges/>,
  },
  {
    path: "/contact-us",
    element: <ContactUs/>,
  },
  {
    path: "/candle",
    element: <Bahare/>,
  },
  {
    path: "/assets/:id",
    element: <CoinPage/>,
  },
  {
    path: "/exchanges/:id",
    element: <ExchangePage/>,
  },
  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
