import './Banner.css'

function Banner(){
    return(
    <section className="lane-page-img">
        <img src={'/imagens/gestao.png'} alt="Liderança e Gestão" />
        <div className="btn-content">
        <button className="botao-play m-2">
                <i className="bi bi-play-fill"/> 
            </button>
            <button className="botao-lista m-2">
                <i className="bi bi-plus-lg"/> 
                Minha lista
            </button>
        </div>
    </section>
    )
}

export default Banner;
