import React from 'react';
// import ReactDOM from 'react-dom';



// ReactDOM.render(<h1>Hello World!</h1>,
// document.getElementById("root"));


import { createRoot } from 'react-dom/client'
import App from "./components/App";
createRoot(document.getElementById('root')).render(
<div>
  <App />
</div>) // this is new feature