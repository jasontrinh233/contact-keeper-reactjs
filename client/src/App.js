import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import ContactState from "./context/contact/ContactState";

import "./App.css";

const App = () => {
   return (
      <AuthState>
         <ContactState>
            <AlertState>
               <Router>
                  <Fragment className="App">
                     <Navbar />
                     <div className="container">
                        <Alerts />
                        <Switch>
                           <Route exact path="/register" component={Register} />
                           <Route exact path="/login" component={Login} />
                           <Route exact path="/" component={Home} />
                           <Route exact path="/about" component={About} />
                        </Switch>
                     </div>
                  </Fragment>
               </Router>
            </AlertState>
         </ContactState>
      </AuthState>
   );
};

export default App;
