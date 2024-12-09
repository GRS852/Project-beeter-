import React, {useState} from 'react';
import FooterComponent from '../components/Footer/FooterComponent';
import "./Register.css";

function Register(){

const [formData, setFormData] = useState({
    nome_usuario: '',
    data_nasc: '',
    cpf: '',
    empresa: '',
    email: '',
    senha: '',
});

const  handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        if(response.ok) {
            alert('Usuario adicionado com sucesso!')
            setFormData({
              nome_usuario: '',
              data_nasc: '',
              cpf: '',
              empresa: '',
              setor_empresa: '', 
              email: '', 
              senha: ''});
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.error}`);
        }

        } catch (error){
            console.error('Erro ao adicionar usuario', error);
            alert("Erro ao adicionar usuário. Tente novamente mais tarde")
        }
    };

return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h1>Registre um novo usuario:</h1>
        <input
          type="text"
          placeholder="Nome Completo"
          name="nome_usuario"
          value={formData.nome_usuario}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          placeholder="Data de nascimento"
          name="data_nasc"
          value={formData.data_nasc}
          onChange={handleChange}
          required
        />
        <input 
          type="text" 
          placeholder="CPF" 
          name="cpf"
          value={formData.cpf}
          onChange={handleChange} 
          required 
        
        />
        <input 
          type="text" 
          placeholder="Empresa" 
          name="empresa" 
          value={formData.empresa}
          onChange={handleChange}
          required 
        />
        <input
          type="text"
          placeholder="Setor da empresa"
          name="setor_empresa"
          value={formData.setor_empresa}
          onChange={handleChange}
          required
        />  
        <input
          type="email"
          placeholder="Digite o email do usuario"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />  
        <input
          type="password"
          placeholder="Senha do usuario"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />  
        <button type="submit">Registrar</button>
      </form>
      <FooterComponent/>
    </div>
  );
}

export default Register;
