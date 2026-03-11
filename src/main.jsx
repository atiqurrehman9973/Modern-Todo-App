import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyStore } from './Component/Store/TodoStore';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={MyStore}>
      <App />
    </Provider>
  </StrictMode>,
)
