import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import Banner from "../components/Banner/Banner"; 
import ListaDeTopicos from "../components/ListaDeTopicos/ListaDeTopicos";
import './Pages_Cursos.css'

const topicos = [
    { titulo: 'Domine suas emoções e revolucione suas habilidades sociais', texto: 'Reproduzir', link: '/video'},
    { titulo: 'Como se beneficiar ao máximo de cada aprendizado', texto: 'Reproduzir' },
    { titulo: 'Os três tipos de observação humana', texto: 'Reproduzir' },
    { titulo: 'Exercício', texto: 'Iniciar Agora' },
    { titulo: 'Os cinco níveis diferentes de experiência humana', texto: 'Reproduzir' },
    { titulo: 'O Espectro dos Espaços de Possibilidade de Crença', texto: 'Reproduzir' },
    { titulo: 'O modelo de Aprendizagem Sócio-Cultural', texto: 'Reproduzir' },
    { titulo: 'Relatório final', texto: 'Iniciar Agora' }
  ];

const banner = {imagem: '/imagens/Training_4.png' , alt: 'Inteligência emocional'}

function Page_InteligenciaEmocional() {
    return(
        <div className="curso-page">
            <NavbarComponent />
            <Banner banner={banner} />
            <main>
                <div>
                    <h1>Aulas instrutores <strong>Forum</strong></h1>
                </div>
                <div className="conteudo">
                    <ListaDeTopicos topicos={topicos} /> 
                </div> 
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>       
            </main>
        </div>
    );
}

export default Page_InteligenciaEmocional;