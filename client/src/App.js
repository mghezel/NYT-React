import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Articles from "./components/Articles";
import Form from "./components/Form"
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Articles
      //   title={"Test"}
       />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/saved" component={Saved} />        
      </Switch>
    </div>
  </Router>;

export default App;
