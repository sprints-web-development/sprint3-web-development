import Image from "next/image";

export default function Solution() {
    return (
        <section className="solution-section">
            <div className="solution">
                <div className="solution-header">
                    <h2>Capture Agora.
                        <br />
                        <span className="differ-font">Entenda Depois.</span>
                    </h2>
                    <p>Uma jornada simples que transforma registros soltos em uma memória visual organizada — sem mudar o
                        jeito
                        natural de estudar.</p>
                </div>
                <div className="solution-backlog">
                    <div className="backlog">
                        <span>01</span>
                        <div className="action">
                            <div className="green-circle">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 7V25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M21 7V25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M7 12H25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M7 20H25" stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="backlog-text">
                            <h2>Capture</h2>
                            <p>Fotografe a lousa, um slide ou sua anotação diretamente pelo aplicativo.</p>
                        </div>
                    </div>
                    <div className="backlog">
                        <span>02</span>
                        <div className="action">
                            <div className="green-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
                                        fill="#0033CC" />
                                </svg>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="backlog-text">
                            <h2>Contextualize</h2>
                            <p>Adicione uma frase ou grave um áudio para preservar o que aquela imagem significa.</p>
                        </div>
                    </div>
                    <div className="backlog">
                        <span>03</span>
                        <div className="action">
                            <div className="green-circle">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20V20H4V4Z" stroke="#1657B8" strokeWidth="2" />

                                    <path d="M4 9.33H20M4 14.66H20" stroke="#1657B8" strokeWidth="2" />

                                    <path d="M9.33 4V20M14.66 4V20" stroke="#1657B8" strokeWidth="2" />
                                </svg>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="backlog-text">
                            <h2>Organize</h2>
                            <p>O SnapNote identifica o tema e agrupa tudo automaticamente por matéria.</p>
                        </div>
                    </div>
                    <div className="backlog">
                        <span>04</span>
                        <div className="action">
                            <div className="green-circle">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 11C19.5 7.6 16.6 5 13 5C9.1 5 6 8.1 6 12C6 15.9 9.1 19 13 19C16 19 18.6 17.1 19.6 14.4"
                                            stroke="#1657B8" strokeWidth="2" strokeLinecap="round" />

                                        <path d="M20 5V11H14" stroke="#1657B8" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <svg width="140" height="12" viewBox="0 0 140 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H138" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M134 2L138 6L134 10" stroke="#C9F24B" strokeWidth="1.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="backlog-text">
                            <h2>Reencontre</h2>
                            <p>Busque em segundos e receba lembretes inteligentes antes da prova.</p>
                        </div>
                    </div>
                </div>
                <div className="real-example">
                    <div className="example">
                        <div className="decoration-note">
                            <div>
                                <svg xmlns="http://w3.org" viewBox="0 0 24 24" width="24" height="24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3>Biologia Detectada</h3>
                                <p>Reprodução Celular</p>
                            </div>
                        </div>
                        <div className="card">
                            <span className="corner corner-1"></span>
                            <span className="corner corner-2"></span>
                            <span className="corner corner-3"></span>
                            <span className="corner corner-4"></span>
                            <div className="card-1">
                                <p className="differ-font">Mitose</p>
                            </div>
                            <div className="card-2">
                                <p className="differ-font">2 células</p>
                            </div>
                        </div>
                    </div>
                    <div className="system">
                        <p className="impact"><span></span>Organização Inteligente</p>
                        <h3>Do rolo da câmera para uma biblioteca que faz sentido.</h3>
                        <p className="text">Títulos, categorias e palavras-chave são sugeridos a partir do conteúdo da imagem e
                            do contexto contado por você.</p>
                        <ul>
                            <li>
                                <div className="green-circle">
                                    <svg xmlns="http://w3.org" viewBox="0 0 20 20" width="20" height="20" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="15 5 9 17 4 10"></polyline>
                                    </svg>
                                </div>
                                <p>Organização automática por matéria</p>
                            </li>
                            <li>
                                <div className="green-circle">
                                    <svg xmlns="http://w3.org" viewBox="0 0 20 20" width="20" height="20" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="15 5 9 17 4 10"></polyline>
                                    </svg>
                                </div>
                                <p>Busca por palavras e contexto</p>
                            </li>
                            <li>
                                <div className="green-circle">
                                    <svg xmlns="http://w3.org" viewBox="0 0 20 20" width="20" height="20" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="15 5 9 17 4 10"></polyline>
                                    </svg>
                                </div>
                                <p>Revisões no momento certo</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

    );
}
