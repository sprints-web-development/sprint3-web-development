import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
import ImageBorder from "../UI-Components/ImageBorder/ImageBorder";

export default function Galeria() {

    const cards = [
        {
            src: "/images/galery/desktop.png",
            title: "Biblioteca Visual",
            description: "Interface pensada para ser funcional, rápida e sem distrações."
        },
        {
            src: "/images/galery/cellPhone.png",
            title: "Lembretes Úteis",
            description: "O conteúdo certo, na hora certa."
        },
        {
            src: "/images/galery/half.png",
            title: "Captura Guiada",
            description: "Um bom registro desde o primeiro clique."
        }
    ]

    return (
        <section id="galeria" className="galery-section">
            <div className="galery-phrase">
                <div className="flex-column align-items-start">
                    <SectionTag name="Galeria" color="white" />
                    <h2>Uma memória visual<br /><span className="differ-font">Do seu jeito.</span></h2>
                </div>
                <p>Interface pensada para ser funcional, rápida e sem distrações.</p>
            </div>

            <div className="galery-images">
                {cards.map((card, index) => (
                    <ImageBorder key={index} card={card} index={index + 1}/>
                ))}
            </div>

        </section>
    );
}
