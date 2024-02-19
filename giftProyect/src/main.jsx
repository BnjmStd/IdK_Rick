import React from 'react'
import ReactDOM from 'react-dom/client';

/* Components */
import Gift  from './components/Gift';
import Header from './components/Header';


import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Gift></Gift>
  </React.StrictMode>,
)
