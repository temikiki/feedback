// import React from "react"
// import ReactDOM from "react-dom" 
// import App from "./App"
// import './index.css'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>, document.getElementById('root')
// );

import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import  App from './App'

const root= createRoot(document.getElementById('root'));

root.render(
<React.StrictMode> 
<App />
</React.StrictMode>
);