export default function Mensagem({ nome, protocolo }) {
    return (
            <div className="contact-success">
                <p className="contact-success-title">Mensagem enviada! ✅</p>
                <p className="contact-success-text">
                    Obrigado, {nome}! Recebemos sua mensagem e nossa equipe vai retornar em breve.
                </p>
                <p className="contact-success-protocol">
                    Protocolo: <strong>#{protocolo} (Anote para futuro contato)</strong>
                </p>
            </div>
    );
}