import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store,{ persistor } from "./store";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode> 
          </BrowserRouter>
        </PersistGate>
  </Provider>
);


reportWebVitals();
