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
                <div className="cards">
                    <PresentCard imageSrc={'/imagens/Training_1.png'}>
                        <div className="content-card-1">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/Training_2.png'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                </div>    
            </main>
        </div>
    );
}

export default Forum;