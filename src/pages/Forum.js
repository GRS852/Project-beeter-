import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import PresentCard from "../components/PresentCard/PresentCard";

import './Forum.css'
import ViewMore from "../components/ViewMore/ViewMore.js";
import FilterDropdown from "../components/FilterDropdown/FilterDropdown.js";


function Forum() {
    return(
        <div className="forum-page">
            <NavbarComponent />
            <main>
                <h1 className="title-text"> Fórum </h1>
                <FilterDropdown></FilterDropdown>
                <h2 className="title-sub">Cursos</h2>
                <div className="cards">
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_1.jpg'}>
                        <div className="content-card-1">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_3.jpg'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_3.jpg'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_3.jpg'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_3.jpg'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_3.jpg'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <PresentCard imageSrc={'/imagens/curso_redimensionado_3.jpg'}>
                        <div className="content-card">
                            <h1 className="title-card">Comunicação eficaz</h1>
                            <i className="bi bi-chat-text"></i>
                        </div>
                    </PresentCard>
                    <div className="button">
                        <ViewMore></ViewMore> 
                    </div>   
                </div>
                
            </main>
        </div>
    );
}

export default Forum;