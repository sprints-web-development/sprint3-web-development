'use client'
import { useEffect, useState } from "react";
import SectionTag from "../SectionTag/sectionTag";
import Mensagem from "../Mensagem/mensagem";

export default function Contato() {

    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" })
    const [messages, setMessages] = useState([])
    const [status, setStatus] = useState(false)
    const [lastMessage, setLastMessage] = useState({ nome: "", protocolo: 0 })

    useEffect(() => {
        const messages = JSON.parse(localStorage.getItem('mensagens')) || []
        setMessages(messages)
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const generateProtocol = () => {
        const protocol = Math.floor(Math.random() * 9000) + 1000
        const exists = messages.filter(message => message.protocolo && message.protocolo === protocol)
        if (exists.length > 0) {
            return generateProtocol()
        } else {
            return protocol
        }
    }

    useEffect(() => {
        localStorage.setItem('mensagens', JSON.stringify(messages))
    }, [messages])


    const handleSubmit = (e) => {
        e.preventDefault()

        const protocol = generateProtocol()

        setLastMessage({ ...lastMessage, nome: form.nome, protocolo: protocol })
        setMessages([...messages, { nome: form.nome, email: form.email, mensagem: form.mensagem, protocolo: protocol }])

        setStatus(true)
        setForm({ nome: "", email: "", mensagem: "" })

    }

    return (
        <section id="contact">
            <div className="contact-copy">
                <SectionTag name="Contato" color="white" />
                <h2>Vamos transformar<br />registros em<br /><span>memórias?</span></h2>
                <p className="contact-description">Quer conhecer melhor o projeto ou compartilhar uma ideia? Fale com a nossa
                    equipe.</p>
                <a className="contact-email" href="mailto:equipe@snapnote.com">equipe@snapnote.com ↗</a>
            </div>

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
        </section>
    );
}
