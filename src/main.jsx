import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextApi from './contexts/ContextApi.jsx'
import { CartProvider } from './contexts/CartProvider.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import AuthContextApi from './contexts/AuthContextApi.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthContextApi>
  <UserProvider>
     <CartProvider>
       <ContextApi>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextApi>
     </CartProvider>
  </UserProvider>
</AuthContextApi>
  </StrictMode>,
)
