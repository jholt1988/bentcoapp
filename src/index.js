import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"


import { ThemeProvider } from "@mui/system"
import { themeOptions } from "./theme.js"
import { CssBaseline } from "@mui/material"
import reportWebVitals from "./reportWebVitals"

import store from "./store/index.js"
import App from "./App"
import "./index.css"



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <ThemeProvider theme={themeOptions}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log())
