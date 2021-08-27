import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";

function App() {
  return (
    //BEM
    <Router>
       <div className="app">
           
           <Switch>
             <Route path="/checkout">
               <Checkout />
             </Route>
             <Route path="/payment">
              <Header />
              <Payment />
               <h1>I am the payment route</h1>
             </Route>
             <Route path="/">
               <Header />
               <Home />
             </Route>
           </Switch>
        </div>
    </Router>
  );
}

export default App;
