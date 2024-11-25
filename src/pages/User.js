import React, {useState} from 'react';

function User(){

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
     <div>
      <h1>Adicionar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default User;
