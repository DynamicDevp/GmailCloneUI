import React from 'react'
import ReactDOM from 'react-dom'
import './Assets/css/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SidebarProvider } from './Context/SidebarContext'
import { FormProvider } from './Context/FormFixedContext'
ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

