import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import Banner from "../components/Banner/Banner"; 
import ListaDeTopicos from "../components/ListaDeTopicos/ListaDeTopicos";
import './Pages_Cursos.css'

const topicos = [
    { titulo: 'Relacionamento Interpessoal: conceito', texto: 'Reproduzir' },
    { titulo: 'Trabalho em Equipe: conceito e fundamentos', texto: 'Reproduzir' },
    { titulo: 'Exercícios', texto: 'Iniciar agora' },
    { titulo: 'Princípios de Etiqueta Social e Profissional', texto: 'Reproduzir' },
    { titulo: 'Fundamentos da adminisytação de conflitos', texto: 'Reproduzir' },
    { titulo: 'Processo de comunicação: emissor, receptor, canal, mensagem, ruídos e feedback', texto: 'Reproduzir' },
    { titulo: 'Comunicação assertiva: conceito e aplicabilidade', texto: 'Reproduzir' },
    { titulo: 'Relatório final', texto: 'Iniciar Agora' }
  ];

const banner = {imagem: '/imagens/Training_2.png' , alt: 'Trabalho em equipe e colaboração'}

function Page_TraEquipeCola() {
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

export default Page_TraEquipeCola;