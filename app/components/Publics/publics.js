import SectionTag from "../SectionTag/sectionTag";
import Person from "../UI-Components/Person/Person";

export default function Publico() {

    const users = [
        {
            abbreviation: "JV",
            type: "Usuário Principal",
            group: "Jovens estudantes",
            note: "18-30 ANOS - ENSINO TÉCNICO E SUPERIOR",
            text: "Guardam lousas, exercícios e slides no celular, estudam entre aulas e precisam revisar conteúdos com agilidade.",
            style: 1,
            list: [
                { text: "Aprendizado Contínuo" },
                { text: "Referências Espalhadas" },
                { text: "Conhecimento Compartilhável" }
            ]
        },
        {
            abbreviation: "LP",
            type: "Usuário Secundário",
            group: "Profissionais Curiosos",
            note: "CURSOS - PALESTRAS - REUNIÕES",
            text: "Registram quadros, apresentações e referências visuais para consultar em projetos e compartilhar aprendizados.",
            style: 2,
            list: [
                { text: "Aprendizado Contínuo" },
                { text: "Referências Espalhadas" },
                { text: "Conhecimento Compartilhável" }
            ]
        },
    ]

    return (
        <section id="publico" className="public-section">
            <div className="public-phrase">
                <SectionTag name="Público-Alvo" />
                <h2>Feito para quem aprende<br /><span className="differ-font">em Movimento.</span></h2>
                <p>O SnapNote apoia pessoas que usam o celular para registrar informações importantes e precisam
                    recuperar o significado delas depois.</p>
                <div className="separator"></div>
                <p className="comment differ-font"><span className="quote">"</span>Eu sei que fotografei. Só não lembro onde — nem
                    por quê.</p>
            </div>
            <div className="public-people">
                {
                    users && users.length > 0 ?
                        users.map((user, index) => (
                            <Person key={index} user={user} />
                        ))
                        : null
                }
            </div>
        </section>

    );
}
