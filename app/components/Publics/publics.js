export default function Publico() {
    return (
        <section id="publico" className="public-section">
            <div className="public-phrase">
                <h2>Feito para quem aprende<br /><span className="differ-font">em Movimento.</span></h2>
                <p>O SnapNote apoia pessoas que usam o celular para registrar informações importantes e precisam
                    recuperar o significado delas depois.</p>
                <div className="separator"></div>
                <p className="comment differ-font"><span className="quote">"</span>Eu sei que fotografei. Só não lembro onde — nem
                    por quê.</p>
            </div>
            <div className="public-people">
                <div className="person">
                    <div className="header">
                        <div className="green-circle">
                            <p>JV</p>
                        </div>
                        <p>USUÁRIO PRINCIPAL</p>
                    </div>
                    <div className="content">
                        <h1>Jovens estudantes</h1>
                        <p className="notation">18-30 ANOS - ENSINO TÉCNICO E SUPERIOR</p>
                        <p>Guardam lousas, exercícios e slides no celular, estudam entre aulas e precisam revisar conteúdos
                            com agilidade.
                        </p>
                        <div className="separator"></div>
                        <ul className="person-characteristics">
                            <li>Rotina Acadêmica Intesa</li>
                            <li>Grande Volume de Registros</li>
                            <li>Busca Rápida antes de Provas</li>
                        </ul>
                    </div>

                </div>
                <div className="person professional">
                    <div className="header">
                        <div className="green-circle">
                            <p>LP</p>
                        </div>
                        <p>USUÁRIO SECUNDÁRIO</p>
                    </div>
                    <div className="content">
                        <h1>Profissionais Curiosos</h1>
                        <p className="notation">CURSOS - PALESTRAS - REUNIÕES</p>
                        <p>Registram quadros, apresentações e referências visuais para consultar em projetos e compartilhar
                            aprendizados.
                        </p>
                        <div className="separator"></div>
                        <ul className="person-characteristics">
                            <li>Apreidizado Contínuo</li>
                            <li>Referências Espalhadas</li>
                            <li>Conhecimento Compartilhável</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

    );
}
