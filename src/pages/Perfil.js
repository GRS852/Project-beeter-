import React from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import './Perfil.css';

function Perfil() {
    return (
        <div className="Perfil">
            <NavbarComponent />
            <main className="dados">
                <h1 className="titulo-meu-perfil">Meu Perfil</h1>
                <div className="content">
                    <div className="textos">
                        <p>Data de Nascimento: <strong>12/12/2000</strong></p>
                        <p>CPF: <strong>254.359.999-04</strong></p>
                        <p>Setor na empresa: <strong>RH</strong></p>
                        <p>Quantidade de cursos concluídos: <strong>2</strong></p>
                        <p>Cursos a Concluir: <strong>3</strong></p>
                        <p>Nota média: <strong>8</strong></p>
                    </div>
                    <div className="avatar">
                        <img src='/imagens/foto_ana_beatriz.png' alt="foto do aluno" />
                        <h2>Ana Beatriz</h2>
                        <p><strong className="nome-unibta">Unibta</strong></p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Perfil;