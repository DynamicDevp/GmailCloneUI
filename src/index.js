import React from 'react'
import ReactDOM from 'react-dom'
import './Assets/css/index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SidebarProvider } from './Context/SidebarContext'
import { FormProvider } from './Context/FormFixedContext'
import { SidebarRightProvider } from './Context/SidebarRightContext'
ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <SidebarProvider>
        <SidebarRightProvider>
          <App />
        </SidebarRightProvider>
      </SidebarProvider>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

