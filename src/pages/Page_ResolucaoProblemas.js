import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import Banner from "../components/Banner/Banner"; 
import ListaDeTopicos from "../components/ListaDeTopicos/ListaDeTopicos";
import './Pages_Cursos.css'

const topicos = [
    { titulo: 'Compreender o pensamento como um processo linguístico', texto: 'Reproduzir' },
    { titulo: 'Identificar e avaliar premissas, argumentos, crenças e evidências', texto: 'Reproduzir' },
    { titulo: 'Pensar criticamente sobre os elementos da mídia, incluindo mídia social, questões morais e políticas', texto: 'Reproduzir' },
    { titulo: 'Exercício - Raciocínio', texto: 'Iniciar Agora' },
    { titulo: 'Comunicar-se com mais eficácia', texto: 'Reproduzir' },
    { titulo: 'Refutar argumentos ruins e construir argumentos melhores', texto: 'Reproduzir' },
    { titulo: 'Relatório final', texto: 'Iniciar Agora' }
  ];

const banner = {imagem: '/imagens/Training_3.png' , alt: 'Resoluções de problemas'}

function Page_ResolucaoProblemas() {
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
            </main>
        </div>
    );
}

export default Page_ResolucaoProblemas;