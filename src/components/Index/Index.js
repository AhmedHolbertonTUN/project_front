import React from 'react';
import Header from '../../HomeComponents/header/header';
import Navbar from '../../HomeComponents/navbar/navbar';
import Footer from '../../HomeComponents/footer/footer';
import HomePage from '../home_page/Home';
import { useAuth0 } from '@auth0/auth0-react';
import About from '../about_page/about';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Policies from '../policies/policies';
import ContactForm from '../../HomeComponents/contact/contactform';
import Product from '../products/Product';
import Category from '../category/Category';
import Profile from '../profile/Profile';
import MyCart from '../Cart/MyCart';

export default function Index() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <Header />
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about"  component={About} />
      <Route path="/policies"  component={Policies} />
      <Route path="/contact"  component={ContactForm} />
      <Route path="/shop"  component={Product} />
      <Route path="/product/:id"  component={Profile} />
      {isAuthenticated && (<Route path="/mycart" render={() => <MyCart user={user.email} />} />)}
      <Route path="/category" component={Category} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}
