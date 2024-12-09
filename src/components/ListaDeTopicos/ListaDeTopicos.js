import React from 'react';
import './ListaDeTopicos.css'

const ListaDeTopicos = ({ topicos }) => {
    return (
        <div>
            {topicos.map((topico, index) => (
            <div key={index} className="zerocontent">
                <h2>{topico.titulo}</h2>
                <a href={topico.link} target="_blank" rel="noopener noreferrer">
                    <button className="bt-lista m-2">
                        <p>{topico.texto}</p>
                    </button>
                </a>
            </div>
            ))}
        </div>
    );
};

export default ListaDeTopicos;
