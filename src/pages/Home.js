import React, { useState } from "react";
import NavbarComponent from "../components/NavBar/NavBarComponent";
import Banner from "../components/Banner/Banner";

import './Home.css'

const banner = {imagem: '/imagens/gestao.png' , alt: 'Liderança e Gestão'}

function Home() {
    return(
<div className="home-page">
    <NavbarComponent />
    <Banner banner={banner} />
    <main>
        <div className="slider-box">
            <section className="container-fluid slider1">
                <div className="category-title">
                    <h1 className="text-white"><b>Formações Recomendadas</b></h1>
                        <div id="carouselExampleIndicators" className="carousel-slide">
                        <div className="carousel-inner" style={{ position: 'relative', overflow: 'visible' }}>
                            <div className="carousel-item active">
                                <section className="position: absolute;">
                                    <div className="card">
                                        <img src={"/imagens/comunicacao.png"} className="card-img-top" alt="Comunicação Eficaz e Assertiva" />
                                        <div className="card-body">
                                            <section className="d-flex justify-content-between">
                                                <div>
                                                    <i className="bi bi-play-circle-fill card-icon"></i>
                                                    <i className="bi bi-plus-circle card-icon"></i>
                                                </div>
                                                <div>
                                                    <i className="bi bi-arrow-down-circle card-icon"></i>
    const[activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
        src: "/imagens/comunicacao.png",
        alt: "Comunicação Eficaz e Assertiva",
        },
        {
            src: "/imagens/gestao.png",
            alt: "Comunicação Eficaz e Assertiva",
        },
        {
            src: "/imagens/gestao.png",
            alt: "Comunicação Eficaz e Assertiva",
        },
        {
            src: "/imagens/gestao.png",
            alt: "Comunicação Eficaz e Assertiva",
        },
        {
            src: "/imagens/gestao.png",
            alt: "Comunicação Eficaz e Assertiva",
        },
        {
            src: "/imagens/comunic.png",
            alt: "Comunicação Eficaz e Assertiva",
        },
    ];

    const hadleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1: prevIndex - 1
        );
    }

    return (
        <div className="home-page">
            <NavbarComponent />
            <Banner />
            <main>
                <div className="slider-box">
                    <section className="container-fluid slider1">
                        <div className="category-title">
                            <h1 className="carrosel-title-txt"><b>Formações Recomendadas</b></h1>
                            <div id="carouselExampleIndicators" className="carousel-slide mx-auto">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <section className="d-flex justify-content-between">
                                            {items.map((item,index) => ( 
                                            <div className="card">
                                                <img src={item.src} className="card-img-top" alt= {item.alt} />
                                                <div className="card-body">
                                                    <section className="d-flex justify-content-between">
                                                        <div className="card-control">
                                                            <i className="bi bi-play-circle-fill card-icon"></i>
                                                            <i className="bi bi-plus-circle card-icon"></i>
                                                        </div>
                                                        <div>
                                                            <i className="bi bi-arrow-down-circle card-icon"></i>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                            ))}
                                        </section>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" onClick={handlePrev} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" onClick={hadleNext} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>                
                    </section>
                </div>
            </main>
        </div>
    )
}
export default Home;