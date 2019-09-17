import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogoBco from "./assets/logo-bco.png";
import Calendario from "./assets/calendario.svg";
import CommentTxt from "./assets/comment-text2x.png";
function Pedido() {
    return (
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand mx-auto" href="#">
                <img src={LogoBco} height="24" alt=""/>
            </a>
        </nav>
       
        <div class="container text-primary text-center py-3">
            <h1>TU PEDIDO ES</h1>
        </div>

        <div class="container text-primary pr-5 pl-5 px-5 strong">
            <h3>Paquete 1</h3>
            <p>La bolsa puede contener 10 prendas</p>
            <p>No incluye chamarras, planchado  y prendas de tintorería. </p>
        </div>
       
        <div class="container text-primary text-center mt-3">
              
            <p class="text-mantle font-weight-bold mt-3" >
            Torre A &nbsp;&nbsp; Apartamento 28</p>
           
            <p class="text-mantle mt-1">Recolección</p>
            <section class="row justify-content-center mt-n3">
                <div>
                    <img  src={Calendario} alt="icono lavapres" width="40px"/>
                </div>
                <div>
                    <p class="text-mantle text-left small font-weight-bold" >Sábado 7 de septiembre <br/> 17:00</p>
                </div>
                
            </section>
            <p class="text-mantle mt-1">Entrega</p>
            <section class="row justify-content-center mt-n3">
                <div>
                    <img src={Calendario} alt="icono lavapres" width="40px"/>
                </div>
                <div>
                    <p class="text-mantle text-left small font-weight-bold" >Martes 10 de septiembre <br/> 17:00</p>
                </div>
                
            </section>
            
            <p class="text-primary font-weight-bold mt-3">Total a pagar en efectivo</p>
           
            <div>
                <button type="button" class="btn bg-degradado-pedido">
                    <span class="font-weight-bold" width="500px">$ 129.00</span>
                </button>
            </div>
         
            <br/>           
                <p class="text-mantle small">Ingresa tu numero celular <br/>para recibir la información de tu pedido</p>
                <div class="input-group mb-3">
                    <div class="input-group-prepend" width="100px">
                        <span class="input-group-text" id="basic-addon1">
                            <img src={CommentTxt} alt="icono mensaje" width="30px"/>
                        </span>
                        <input type="text" class="form-control" placeholder="Numero celular"/>
                    </div>
                </div>
            
            <div>
                <Link to="/exito/">
                    <button type="button" class="btn btn-primary mt-2">Finalizar</button>
                </Link>
                <Link to="/inicio/">
                    <button type="button" class="btn btn-outline-primary mt-3">Cancelar</button>
                </Link>    
            </div>
        </div>  

        



        </div>
    </div>
    )
}

export default Pedido;