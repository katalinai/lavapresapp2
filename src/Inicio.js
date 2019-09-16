import React from "react";

function Inicio() {
    return(
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand mx-auto" href="#">
                    <img src="../assets/logo-bco.png" height="24" alt=""/>
                </a>
            </nav>
           
            <div class="container text-primary text-center py-3">
                <h1>¡HOLA!</h1>
                <p>¿DÓNDE RECOGEREMOS TU ROPA?</p>
                <p class="text-secondary">Selecciona tu torre</p>
                <section class="row">
                    <div class="col ">
                        <a class="active" href="#">
                            <img src="../assets/torreA.png" alt=""/>
                            <p class="small">TORRE A</p>
                        </a>
                    </div>    
                    <div class="col">
                        <a href="#">
                            <img src="../assets/torreB.png" alt=""/>
                            <p class="small">TORRE B</p>
                        </a>
                    </div>  
                </section>
                <section>
                    
                    
                    <p class="small">Número de apartamento</p>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">
                                <span class="oi oi-home"></span>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Departamento" aria-label="Departamento" aria-describedby="basic-addon1"/>
                        </div>
                    
                </section>
                
                <button type="button" class="btn btn-primary  ">SIGUIENTE <span class="oi oi-arrow-right"></span></button>
            </div>
        </div>    
    </div>
    )   
}

export default Inicio;