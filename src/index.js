import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from "./style/ResetStyle";
import Footer from './components/Footer/Footer';
import NavBar from'./components/NavBar/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>
);
