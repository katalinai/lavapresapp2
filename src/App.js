import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Splash from "./Splash";
import Inicio from "./Inicio";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        
        <Route path="/" exact component={Splash} />
        <Route path="/Inicio/" component={Inicio} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;