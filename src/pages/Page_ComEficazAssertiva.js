import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import Banner from "../components/Banner/Banner"; 
import ListaDeTopicos from "../components/ListaDeTopicos/ListaDeTopicos";
import './Pages_Cursos.css'

const topicos = [
    { titulo: 'Entender os conceitos e impactos da comunicação', texto: 'Reproduzir' },
    { titulo: 'Desenvolver habilidades para ouvir e elevar a comunicação interpessoal', texto: 'Reproduzir' },
    { titulo: 'Exercícios', texto: 'Iniciar agora' },
    { titulo: 'Identificar as diferenças de estilo de comunicação', texto: 'Reproduzir' },
    { titulo: 'Aprender o método ideal de comunicação', texto: 'Reproduzir' },
    { titulo: 'Saber distinguir a comunicação agressiva, passiva e assertiva', texto: 'Reproduzir' },
    { titulo: 'Relatório final', texto: 'Iniciar Agora' }
  ];

const banner = {imagem: '/imagens/Training_1.png' , alt: 'Comunicação eficaz e assertiva'}

function Page_ComEficazAssertiva() {
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

export default Page_ComEficazAssertiva;