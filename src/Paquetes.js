import React from "react";

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
                                        <img src="../assets/paquete01.png" alt=""/>
                                        
                                    </a>
                                </div>   
            </section>
            <section class="row">
                    <div class="col ">
                        <a class="active" href="#">
                            <img src="../assets/paquete02.png" alt=""/>
                            
                        </a>
                    </div>   
            </section>
            <section class="row">
                    <div class="col ">
                        <a class="active" href="#">
                            <img src="../assets/paquete03.png" alt=""/>
                            
                        </a>
                    </div>   
            </section>
            
                <section>
                    <tr>
                            <td>
                            <input type="checkbox" name="myTextEditBox" value="checked" />  ACEPTO LOS TERMINOS & CONDICIONES
                            </td>
                            <br/>
                            <br/>
                            <div>                                                     
                                    <button type="button" class="btn btn-primary  "> Sigamos<span class="oi oi-arrow-right"></span></button>
                                    
                                    </div>  
                    </tr>

                </section>
            
            
            </div>
        </div>    
    </div>
    )
}

export default Paquetes;