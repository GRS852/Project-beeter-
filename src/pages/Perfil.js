import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import './Perfil.css';

function Perfil() {
    const [userData, setUserData] = useState(null); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('authToken'); 
                console.log('Token armazenado:', token);
                const response = await fetch('http://localhost:5000/user-info', {
                    method: 'GET',  
                    headers: {
                        'Authorization': token, 
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data); 
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || 'Erro ao carregar os dados do usuário');
                }
            } catch (err) {
                setError('Erro de conexão com o servidor');
                console.error(err);
            }
        };

        fetchData();
    }, []); 

    if (error) {
        return <p className="error">{error}</p>; 
    }

    if (!userData) {
        return <p>Carregando...</p>; 
    }

    return (
        <div className="Perfil">
            <NavbarComponent />
            <div className="dados">
                <h1 className="titulo-meu-perfil">Meu Perfil</h1>
                <div className="content">
                    <div className="avatar">
                        <img src={userData.avatar || '/imagens/avatar_padrao.jpg'} alt="foto do aluno" />
                        <h2 className="nome-perfil">{userData.nome_usuario}</h2>
                        <p><strong className="nome-empresa">{userData.empresa || 'Empresa não informada'}</strong></p>
                        <div className="textos">
                        <p>Data de Nascimento: <strong>{userData.data_nasc}</strong></p>
                        <p>CPF: <strong>{userData.cpf}</strong></p>
                        <p>Cargo: <strong>{userData.setor_empresa}</strong></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
