import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import "./Video.css";

function Video() {
    return (
        <div className="video">
            <NavbarComponent />
            <main>
                <div className="video-content">
                    <h1 className="titulo-video">Vídeo Aula</h1>
                    <div className="content">
                        <iframe 
                            className="video-aula"
                            width="784px" 
                            height="424px" 
                            src="https://www.youtube.com/embed/grpv0Gi0HCg" 
                            allowFullScreen
                            title="Vídeo Aula"
                        ></iframe>
                    </div>
                    <div className="resumo-aula">
                        <h1>Princípios Fundamentais</h1>
                        <p>Liderança: Capacidade de inspirar equipes e tomar decisões assertivas.</p>
                        <p>Tomada de Decisão: Baseada em análise de dados e informações confiáveis.</p>
                        <p>Sustentabilidade: Adotar práticas éticas e responsáveis para o impacto social, ambiental e econômico.</p>
                        <p>Adaptabilidade: Flexibilidade para responder a mudanças no mercado.</p>

                        <h1>Importância da Gestão Empresarial</h1>
                        <p>Aumenta a competitividade no mercado.</p>
                        <p>Melhora a eficiência e reduz custos operacionais.</p>
                        <p>Fomenta a inovação e a criação de valor.</p>
                        <p>Contribui para o crescimento sustentável e a longevidade da empresa.</p>
                        <p>
                            Em suma, a gestão empresarial é uma prática multidisciplinar que conecta todos os 
                            departamentos de uma empresa para alcançar sucesso organizacional.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Video;
