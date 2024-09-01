import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import PresentCard from "../components/PresentCard/PresentCard";

import './Forum.css'


function Forum() {
    return(
        <div className="forum-page">
            <NavbarComponent />
            <main>
                <h1 className="title-text"> Fórum </h1>
                <PresentCard>
                    <div className="content-card">
                      <h1 className="title">Curso de tanamnam</h1>
                    </div>
                </PresentCard>
            </main>
        </div>
    );
}

export default Forum;