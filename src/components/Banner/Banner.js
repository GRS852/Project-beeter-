import './Banner.css'

function Banner({banner}){
    return(
    <section className="lane-page-img">
        <img src={banner.imagem} alt={banner.alt} />
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
