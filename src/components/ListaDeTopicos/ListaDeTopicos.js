import React from 'react';
import './ListaDeTopicos.css'

const ListaDeTopicos = ({ topicos }) => {
    return (
        <div>
            {topicos.map((topico, index) => (
            <div key={index} class="zerocontent">
                <h2>{topico.titulo}</h2>
                <button className="bt-lista m-2">
                    <p>{topico.texto}</p>
                </button>
            </div>
            ))}
        </div>
    );
  };
  
  export default ListaDeTopicos;