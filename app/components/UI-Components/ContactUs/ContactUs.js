import Mensagem from "../../Mensagem/mensagem"

export default function ContactUs({ handleChange, handleSubmit, lastMessage, status, form}) {
    return (
        <form className="contact-form" id="formContact" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
                <div className="form-field">
                    <label htmlFor="nome">SEU NOME</label>
                    <input onChange={handleChange} value={form.nome} required type="text" id="nome" name="nome" placeholder="Como podemos chamar você?" />
                </div>
                <div className="form-field">
                    <label htmlFor="email">SEU E-MAIL</label>
                    <input onChange={handleChange} value={form.email} required type="email" id="email" name="email" placeholder="voce@email.com" />
                </div>
                <div className="form-field form-field-full">
                    <label htmlFor="mensagem">MENSAGEM</label>
                    <textarea onChange={handleChange} value={form.mensagem} required id="mensagem" name="mensagem" placeholder="Conte para a gente..."></textarea>
                </div>
            </div>
            <button className="contact-submit" type="submit">Enviar mensagem <span>→</span></button>
            {status ?
                <Mensagem nome={lastMessage.nome} protocolo={lastMessage.protocolo} />
                : null}
        </form>
    )
}