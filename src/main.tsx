import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvideer } from './Store/todos.tsx'
import {BrowserRouter} from "react-router-dom"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TodosProvideer>
     <App />
    </TodosProvideer>
    </BrowserRouter>
  </StrictMode>,
)
