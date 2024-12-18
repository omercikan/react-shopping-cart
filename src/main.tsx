// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss';
import { GlobalContextProvider } from './context/GlobalContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  // </StrictMode>,
)
 