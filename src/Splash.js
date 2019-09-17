import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./assets/logotipo-lavapres.svg";

function Splash() {
    return (
    <div class="bg-shappire">

        <div class="row align-items-center text-center alto-100">
                <div class="mx-auto">
                    <Link to="/inicio/">
                    <img class="" src={Logo} alt="icono lavapres blanco" 
                        width="307px"/>
                        <p class="mt-3 small text-light ">Tu tiempo de lavado va por nuestra cuenta</p>
                    </Link>
                </div>
            </div>
    </div>
    )
}

export default Splash;