import { CssBaseline } from '@mui/material';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes } from './components/routes';

ReactDOM.render(
   <React.StrictMode>
      <CssBaseline />
      <Routes />
   </React.StrictMode>,
   document.getElementById('root'),
);
