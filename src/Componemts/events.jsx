import { use, useEffect } from "react";
import "./slides.css";

function Events(image1, image2, alt1, alt2, image3 = "/src/assets/lock.svg", alt3 = "Imagem de cadeado") {
    useEffect(() => {
        const miniaturas = document.querySelectorAll(".imgSlides");
        const imagemPrincipal = document.querySelector("#container img");
        const redes = document.querySelector(".redes");
        const imagens = [
            { src: image1, alt: alt1 },
            { src: image2, alt: alt2 },
            { src: image3, alt: alt3 },
            { src: image3, alt: alt3 },
            { src: image3, alt: alt3 },
            { src: image3, alt: alt3 },
            { src: image3, alt: alt3 },
            { src: image3, alt: alt3 },
        ];

        const handleMouseOver = () => {
            redes.classList.remove("redes");
            redes.classList.add("redesover");
        };

        const handleMouseOut = () => {
            redes.classList.remove("redesover");
            redes.classList.add("redes");
        };

        imagemPrincipal.addEventListener("mouseover", handleMouseOver);
        imagemPrincipal.addEventListener("mouseout", handleMouseOut);

        const handleClick = function () {
            imagemPrincipal.src = this.src;
        };

        miniaturas.forEach((miniatura) => {
            miniatura.addEventListener("click", handleClick);
        });

        return () => {
            imagemPrincipal.removeEventListener("mouseover", handleMouseOver);
            miniaturas.forEach((miniatura) => {
                miniatura.removeEventListener("click", handleClick);
            });
        };
    }, []);


    return (
        <div>
            <div id="container">
                <img id="imagem-principal" src="/public/imagem.jpg" alt="" />
            </div>
            <div className="redes">
                Espalhe este SPOILER: <img src="/src/assets/facebook.svg" alt="" /> <img src="/src/assets/linkedin.svg" alt="" /><img src="/src/assets/whatsapp.svg" alt="" /> <img src="/src/assets/twitter.svg" alt="" />
            </div>
            <div className="slides">
                <button><img src="/src/assets/arrow-left.svg" alt="" /></button>
                <div className="slides">
                    <img src={image1} alt={alt1} className="imgSlides" />
                    <img src={image2} alt={alt2} className="imgSlides" />
                    <img src={image3} alt={alt3} className="imgSlides" />
                    <img src={image3} alt={alt3} className="imgSlides" />
                    <img src={image3} alt={alt3} className="imgSlides" />
                    <img src={image3} alt={alt3} className="imgSlides" />
                    <img src={image3} alt={alt3} className="imgSlides" />
                    <img src={image3} alt={alt3} className="imgSlides" />
                </div>
                <button><img src="/src/assets/arrow-right.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default Events;