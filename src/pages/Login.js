import React, { useState } from "react";
import './Login.css'; 

import Footer from '../components/Footer/FooterComponent.js'

function Login() {
    const [formData, setFormData] = useState({ email: '', senha: ''});
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Resposta da API:', data); 
                console.log('Permissão de usuário:', data.permissao_usuario)
                console.log('Permissão de email:', data.email);
                
                if (data.permissao_usuario == 0){
                    
                    localStorage.setItem('authToken', data.token);
                    console.log(data.token)
                    alert('Login bem-sucedido!');
                    window.location.replace('/home');

                } else if (data.permissao_usuario ==  1){

                    console.log('ENTREI NO RESPONSE OK LOGIN')
                    localStorage.setItem('authToken', data.token);
                    alert('Login bem-sucedido!');
                    window.location.replace('/register');

                } else {
                    setError('Permissao de usuário inválida');
                }
                
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Erro ao fazer login');
            }
        } catch (err) {
            setError('Erro de conexão com o servidor');
            console.error(err);
        }
    };

    return (
        <div className="login">
            <main>
                <div className="login-container">
                    <div className="login-image-container">
                        <img
                            src="/imagens/Beetter_-_Fundo_transparente2.png"
                            alt="Logo"
                            className="login-logo"
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="login-form-container">
                        <h1 className="login-title">BEM VINDO!</h1>
                        <p className="login-subtitle">Insira sua credencial para acessar.</p>
                        <form className="form-style" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="email"
                                className="login-input"
                                placeholder="Usuário"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="senha"
                                className="login-input"
                                placeholder="Senha"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                            <div className="buttons">
                                <button type="submit" className="login-button">
                                    <p>ENTRAR</p>
                                </button>
                                <button type="button" className="forgot-password">
                                    <a href="#">Esqueci minha senha</a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;
