import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Exito() {
    return (
  
            <div class="bg-shappire height100">
                
                <section class="row">
                        <div class="col ">
                            <img class="mt-5 rounded mx-auto d-block" src="../assets/icono-lavapres-blanco.svg" alt="icono lavapres blanco" 
                            width="100px"/>
                        </div>    
                </section>
             
                <div class="container text-light text-center mt-5">
                    <h1 class="color-white  mensaje-exitoso">¡LISTO!</h1>
                    <p class="color-white font-weight-bold">TU PEDIDO FUE EXITOSO</p>
                </div>
              
                <div class="container text-primary text-center mt-3">
                    <h1 class="text-success mensaje-exitoso">FOLIO A0984532</h1>
                    <p class="text-success small font-weight-bold mt-3" >Recuerda tener tu paquete el día</p>
                </div>  
                <section class="row justify-content-center mt-n3">
                        <div>
                            <img  src="../assets/calendario.svg" alt="icono lavapres blanco" width="40px"/>
                        </div>
                        <div>
                            <p class="text-success text-left small font-weight-bold" >Sábado 21 de septiembre <br/> 17:00</p>
                        </div>
                </section>
                
                <div class="text-center mt-4">
                    <Link to="/inicio/">
                        <button type="button" class="btn bg-degradado "><span class=" small font-weight-bold">Nuevo pedido</span></button>
                    </Link>
                </div>
              
                <div class="text-center  font-weight-bold mt-3">  
                    <Link to="/">
                        <button type="button" class="btn btn-primary "><span class="small font-weight-bold">Cerrar</span></button>
                    </Link>
                </div>  
            </div>    
        
    )
}

export default Exito;