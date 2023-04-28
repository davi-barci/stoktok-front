import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from "./style/ResetStyle";
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    <App />
    <Footer/>
  </React.StrictMode>
);
