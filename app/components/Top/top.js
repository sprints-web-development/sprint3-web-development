import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";

export default function Top() {
    return (
        <section id="top">
            <div className="home">
                <div className="call-to-action">
                    <SectionTag name="Da Foto à Memória, sem perder o contexto"/>
                    <h1 className="title">Suas anotações merecem ser</h1>
                    <h1 className="title differ-font">reencontradas</h1>
                    <p className="color-grey">O SnapNote transforma fotos de lousas, cadernos e slides em registros organizados,
                        pesquisáveis e
                        prontos para a sua próxima revisão.
                    </p>
                    <div className="buttons">
                        <a href="#galeria"><button className="btn">Conheça a solução</button></a>
                        <a href="#galeria2"><button className="btn-white">Ver protótipo</button></a>
                    </div>
                    <div className="separator"></div>
                    <div className="characteristics">
                        <div>
                            <p>Menos</p>
                            <p>tempo buscando</p>
                        </div>
                        <div>
                            <p>Mais</p>
                            <p>contexto preservado</p>
                        </div>
                        <div>
                            <p>Sempre</p>
                            <p>pronto para revisar</p>
                        </div>
                    </div>
                </div>
                <div className="interface">
                    <Image src="/images/prot.png" alt="Grande deslizamento de terra em encosta urbana" width={311} height={595} />
                    <div className="blue-circle"></div>
                    <span className="decoration-ideas">ideias</span>
                    <div className="decoration-note">
                        <div>
                            <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <div>
                            <h3>Nota Organizada</h3>
                            <p>Física - Cinemática</p>
                        </div>
                    </div>
                    <div className="decoration-ai">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                                    fill="#0033CC" />
                            </svg>
                        </div>
                        <div>
                            <h3>Contexto Recuperado</h3>
                            <p>"Cai na prova de sexta!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
