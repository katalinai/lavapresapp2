import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Paquetes() {
    return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand mx-auto" href="#">
                    <img src="../assets/logo-bco.png" height="24" alt=""/>
                </a>
            </nav>
    
            <div class="container text-primary text-center py-2">
                                    
            <section class="row">
                                <div class="col ">
                                    <a class="active" href="#">
                                        <img src="../assets/paquete01.png" class="img-fluid" alt=""/>
                                        
                                    </a>
                                </div>   
            </section>
            <section class="row">
                    <div class="col ">
                        <a class="active" href="#">
                            
                            <img src="../assets/paquete02.png" class="img-fluid" alt=""/>
                            
                        </a>
                    </div>   
            </section>
            <section class="row">
                    <div class="col ">
                        <a class="active" href="#">
                            <img src="../assets/paquete03.png" class="img-fluid" alt=""/>
                            
                        </a>
                    </div>   
            </section>
            
                <section>
                    <input type="checkbox" name="myTextEditBox" value="checked" />  ACEPTO LOS TERMINOS & CONDICIONES
                    <div>                                                     
                        <Link to="/pedido/">
                            <button type="button" class="btn btn-primary mt-3"> Sigamos
                            <span class="oi oi-arrow-right"></span></button>
                        </Link>            
                    </div>  
                 

                </section>
            
            
            </div>
        </div>    
    </div>
    )
}

export default Paquetes;