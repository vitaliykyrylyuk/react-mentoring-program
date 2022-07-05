import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducers/rootReducers'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
