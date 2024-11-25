import React, { useState } from "react";
import './Login.css';


function Login() {
    const [formData, setFormData] = useState({ email: '', senha: '' });
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
              
                localStorage.setItem('authToken', data.token);
                alert('Login bem-sucedido!');
               
                window.location.href = '/';
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
        <>
            <div className="login">
                <main>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Digite seu e-mail"
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha:</label>
                            <input 
                                type="password" 
                                id="senha" 
                                name="senha" 
                                placeholder="Digite sua senha"
                                value={formData.senha}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="login-button">Entrar</button>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Login;
