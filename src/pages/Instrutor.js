import React from 'react';
import './Instrutor.css'; 

export default function Instrutor  ()  {
  return (
    <div className="page-container">
      <div className="logo-container">
        <img className="logo" src="/imagens/Beetter_-_Fundo_transparente2.png" alt="Logo Beetter" />
      </div>
      <div className="container">
        <h1>Estamos em Manutenção</h1>
        <p>Estamos realizando alguns ajustes na nossa página de instrutores. Isso pode levar alguns minutos.</p>
        <p>Por favor, volte mais tarde.</p>
        <div className="contact-info">
          <p>
            Se você precisar de ajuda, entre em contato conosco pelo nosso e-mail{' '}
            <a href="mailto:Beetter.suporte@gmail.com">Beetter.suporte@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

