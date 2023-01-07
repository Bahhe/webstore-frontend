import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./assests/globalStyles/index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { store, persistor } from "./app/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import ScrollToTop from "./components/ScrollToTop"
import { disableReactDevTools } from "@fvilers/disable-react-devtools"
if (process.env.NODE_ENV === "production") disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
