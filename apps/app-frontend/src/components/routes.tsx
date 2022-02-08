import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { IndexPage } from '../pages';

export const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" element={<IndexPage />} />
         </Switch>
      </BrowserRouter>
   );
};
