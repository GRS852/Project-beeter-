import React from "react";
import './Login.css'
import NavbarComponent from "../components/NavBar/NavBarComponent";

function Login(){
    return(
        <div className="login">
            <NavbarComponent />
            <main>
                <h1>Pagina login</h1>
            </main>
        </div>
    
    )
}

export default Login;