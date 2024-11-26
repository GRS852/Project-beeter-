import React, {useState} from 'react';
import FooterComponent from '../components/Footer/FooterComponent';
import "./Register.css";

function Register(){

const [formData, setFormData] = useState({
    nome: '',
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
            setFormData({nome: '', email: '', senha: ''});
        } else {
            const errorData = await response.json();
            alert(`Erro: ${errorData.error}`);
        }

        } catch (error){
            console.error('Erro ao adicionar usuario', error)
        }
    };

return (
    <div className="registro-container">
      <form className="registro-form">
        <h1>Registre um novo usuario:</h1>
        <input
          type="text"
          placeholder="Nome Completo"
          name="nomeCompleto"
          required
        />
        <input
          type="date"
          placeholder="Data de nascimento"
          name="dataNascimento"
          required
        />
        <input type="text" placeholder="CPF" name="cpf" required />
        <input type="text" placeholder="Empresa" name="empresa" required />
        <input
          type="text"
          placeholder="Setor da empresa"
          name="setorEmpresa"
          required
        />  
        <input
          type="email"
          placeholder="Digite o email do usuario"
          name="emailuser"
          required
        />  
        <input
          type="password"
          placeholder="Senha do usuario"
          name="password"
          required
        />  
        <button type="submit">Registrar</button>
      </form>
      <FooterComponent/>
    </div>
  );
}

export default Register;
