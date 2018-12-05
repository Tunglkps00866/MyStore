import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import HomePage from './Component/HomePage';
import ProductPage from './Component/ProductPage';
import AboutPage from './Component/AboutPage';
import SigninPage from './Component/SigninPage';
import CartPage from './Component/CartPage';
import PaymentPage from './Component/PaymentPage';
import ContactPage from './Component/ContactPage';
import SpecialPage from './Component/SpecialPage';
import LaptopPage from './Component/LatopPage';
import KeyboardPage from './Component/KeyboardPage';
import MousePage from './Component/MousePage';
import SignupPage from './Component/SignupPage';

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/san-pham" component={ProductPage}/>
        <Route path="/laptop" component={LaptopPage}/>
        <Route path="/ban-phim" component={KeyboardPage}/>
        <Route path="/chuot" component={MousePage}/>
        <Route path="/gioi-thieu" component={AboutPage}/>
        <Route path="/dang-nhap" component={SigninPage}/>
        <Route path="/gio-hang" component={CartPage}/>
        <Route path="/thanh-toan" component={PaymentPage}/>
        <Route path="/lien-he" component={ContactPage}/>
        <Route path="/khuyen-mai" component={SpecialPage}/>
        <Route path="/dang-ky" component={SignupPage}/>
      </Switch>
    </Suspense>
  </Router>
);
export default AppRouter;