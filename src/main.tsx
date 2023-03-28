import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
      <Auth0Provider
        domain="dev-yjz5vcm8txrp3nzd.us.auth0.com"
        clientId="GJEKfY7OOP5FxH3KXcs0YxbF2Xe4ghKT"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
