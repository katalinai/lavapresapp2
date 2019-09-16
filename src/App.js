import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Splash from "./Splash";
import Inicio from "./Inicio";
import Paquetes from "./Paquetes";
import Pedido from "./Pedido";
import Exito from "./Exito";


function AppRouter() {
  return (
    <Router>
      <div>
        
        <Route path="/" exact component={Splash} />
        <Route path="/inicio/" component={Inicio} />
        <Route path="/paquetes/" component={Paquetes} />
        <Route path="/pedido/" component={Pedido}/>
        <Route path="/exito/" component={Exito}/>
      </div>
    </Router>
  );
}

export default AppRouter;