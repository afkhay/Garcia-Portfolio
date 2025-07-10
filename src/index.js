import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove",(e) => {
    let x = e.clientX;
    let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
}
);

reportWebVitals();