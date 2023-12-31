import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'
import { LocalToastProvider } from 'react-local-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './redux/store'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <React.StrictMode>
      <LocalToastProvider>
        <HelmetProvider>
          <Provider store={store}>
            <AuthProvider>
              <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
              </QueryClientProvider>
            </AuthProvider>
          </Provider>
        </HelmetProvider>
      </LocalToastProvider>
    </React.StrictMode>
  </div>
)
