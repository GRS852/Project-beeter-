import React from "react";
import './Login.css'
import NavbarComponent from "../components/NavBar/NavBarComponent";

function Login(){
    return(
        <div className="login">
            <NavbarComponent />
            <main>
            <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '800px', display:'flex', alignItems:'center', backgroundColor: 'black' }}>
          <img
            src="/imagens/Beetter_-_Fundo_transparente2.png"
            alt="Logo"
            style={{width:'500px', height:'600px', paddingLeft: '65px' }}
          />
        </div>
        <div style={{ height: '100vh', borderRight: '10px solid #5EDF26' }}></div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            paddingBottom:'250px',
            flexDirection: 'column',
            position: 'relative',
            backgroundColor: 'white'
          }}
        >
          <h1 style={{ fontSize: '75px', padding: 0 }}>BEM VINDO!</h1>
          <p style={{ color: '#8A32A9', fontSize: '24px' }}>Insira sua credencial para acessar.</p>
          <input
            type="text"
            className='imput'
            style={{
              width: '509px',
              height: '62px',
              border: '4px solid #5edf26',
              borderRadius: '6px',
              outline: 'none',
              fontSize: '24px',
              paddingLeft: '12px',
            }}
            placeholder="Usuário"
          />
          <div style={{ paddingTop: '20px' }}>
            <input
              type="password"
              className='imput'
              style={{
                width: '509px',
                height: '62px',
                border: '4px solid #5edf26',
                borderRadius: '6px',
                outline: 'none',
                fontSize: '24px',
                paddingLeft: '12px',
              }}
              placeholder="Senha"
              
            />
            <div style={{ width: '509px', display: 'flex', justifyContent: 'end' }}>
              <a
                href="#"
                style={{
                  padding: '20px',
                  textDecoration: 'none',
                  color: '#8A32A9',
                  fontSize: '17px',
                }}
              >
                Esqueci minha senha
              </a>
            </div>
          </div>
          <div>
            <button
              style={{
                padding: '6px 50px',
                borderRadius: '50px',
                backgroundColor: '#5EDF26',
                border: 'transparent',
              }}
            >
              <p style={{ fontSize: '20px', color: '#FFF', fontWeight: 'bold' }}>ENTRAR</p>
            </button>
          </div>
          <div
            style={{
              width: '100%',
              height: '200px',
              position: 'absolute',
              bottom: 0,
              backgroundColor: 'black',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'end', height: '100%' }}>
              <img
                src="/imagens/colmeia4.png"
                alt="Fundo"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
            </main>
        </div>
    
    )
}

export default Login;