import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import HomePage from './Component/HomePage';
import ProductPage from './Component/ProductPage';
import AboutPage from './Component/AboutPage';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/SignupPage';

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/trang-chu" component={HomePage}/>
        <Route path="/san-pham" component={ProductPage}/>
        <Route path="/gioi-thieu" component={AboutPage}/>
        <Route path="/dang-nhap" component={LoginPage}/>
        <Route path="/dang-ky" component={SignupPage}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;