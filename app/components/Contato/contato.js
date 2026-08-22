export default function Contato() {
    return (
        <section id="contact">
            <div className="contact-copy">
                <p className="contact-label"><span></span>CONTATO</p>
                <h2>Vamos transformar<br/>registros em<br/><span>memórias?</span></h2>
                    <p className="contact-description">Quer conhecer melhor o projeto ou compartilhar uma ideia? Fale com a nossa
                        equipe.</p>
                    <a className="contact-email" href="mailto:equipe@snapnote.com">equipe@snapnote.com ↗</a>
                </div>

                    <form className="contact-form" id="formContact">
                        <div className="contact-form-grid">
                            <div className="form-field">
                                <label htmlFor="nome">SEU NOME</label>
                                <input required type="text" id="nome" name="nome" placeholder="Como podemos chamar você?"/>
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">SEU E-MAIL</label>
                                <input required type="email" id="email" name="email" placeholder="voce@email.com"/>
                            </div>
                            <div className="form-field form-field-full">
                                <label htmlFor="mensagem">MENSAGEM</label>
                                <textarea required id="mensagem" name="mensagem" placeholder="Conte para a gente..."></textarea>
                            </div>
                        </div>
                        <button className="contact-submit" type="submit">Enviar mensagem <span>→</span></button>
                    </form>
                </section>
                );
}
