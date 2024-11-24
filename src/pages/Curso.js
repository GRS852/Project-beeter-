import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
// eslint-disable-next-line
import Banner from "../components/Banner/Banner"; 
import ListaDeTopicos from "../components/ListaDeTopicos/ListaDeTopicos";

import './Curso.css'

const topicos = [
    { titulo: 'Apresentação', texto: 'Reproduzir' },
    { titulo: 'O que você entende que um lider deve possuir?', texto: 'Reproduzir' },
    { titulo: 'Exercício', texto: 'Inciar agora' },
    { titulo: 'Eficácia versus eficiência', texto: 'Reproduzir' },
    { titulo: 'Planejamento e Administração do Tempo', texto: 'Reproduzir' },
    { titulo: 'Criando uma visão', texto: 'Reproduzir' },
    { titulo: 'Definindo seus objetivos', texto: 'Reproduzir' },
    { titulo: 'Exercício - Criando uma visão', texto: 'iniciar agora' },
    { titulo: 'Exercício - Criando uma visão', texto: 'iniciar agora'}
  ];

const banner = {imagem: '/imagens/gestao.png' , alt: 'Liderança e Gestão'}

function teste() {
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
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </main>
        </div>
    );
}

export default teste;