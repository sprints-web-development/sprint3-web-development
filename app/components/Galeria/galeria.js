import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";

export default function Galeria() {
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
                <div className="image-border">
                    <Image src="/images/galery/desktop.png" alt="" width={350} height={150} />
                    <div className="images-subtitles">
                        <p className="number">01</p>
                        <div>
                            <h2>Biblioteca Visual</h2>
                            <p>Tudo organizado por matérias e contexto.</p>
                        </div>
                    </div>
                </div>
                <div className="image-border">
                    <Image src="/images/galery/cellPhone.png" alt="" width={350} height={150} />
                    <div className="images-subtitles">
                        <p className="number">02</p>
                        <div>
                            <h2>Lembretes Úteis</h2>
                            <p>O conteúdo certo, na hora certa.</p>
                        </div>
                    </div>
                </div>
                <div className="image-border">
                    <Image src="/images/galery/half.png" alt="" width={350} height={150} />
                    <div className="images-subtitles">
                        <p className="number">03</p>
                        <div>
                            <h2>Captura Guiada</h2>
                            <p>Um bom registro desde o primeiro clique.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
