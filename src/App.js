import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe( 
//   'pk_test_51JStr5BljLMedA1L5zq93RRZkBCPAIfViwnQ43IUQYoPC42ZcFZcjHkVQAz7qS94I7vLulfQlse1JHeal3vo3kUq00rLOt1Jqv'
//   );
function App() {
  const totalPrice = 1000;
  return (
    //BEM
    <Router>
       <div className="app">
           <Switch>
           
             <Route path="/checkout">
             <Header />
               <Checkout />
             </Route>
             <Route path="/payment">
              <Header />
              {/* <Elements stripe={promise}>
                <Payment />
              </Elements> */}
              {/* <p>Pay Total of $ {totalPrice}</p> */}
              <p>
                <Payment price={totalPrice} />
              </p>
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
