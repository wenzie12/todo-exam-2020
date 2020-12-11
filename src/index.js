import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//context
import { TodosProvider, EditProvider } from './context/todoContext'

ReactDOM.render(
  <React.StrictMode>
    <TodosProvider>
      <EditProvider>
        <App />
      </EditProvider>
    </TodosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);