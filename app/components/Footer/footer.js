import Image from "next/image";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-brand">
                <a href="#top" className="footer-logo">
                    <Image src="/images/logo.png" alt="Logotipo do SnapNote" width={50} height={50} />
                    <span>Snap<span>Note</span></span>
                </a>
                <p>Fotografe. Organize. Reencontre.</p>
            </div>

            <nav className="footer-column" aria-label="Navegação principal">
                <a href="#top">A solução</a>
                <a href="#galeria">Galeria</a>
            </nav>

            <nav className="footer-column" aria-label="Navegação complementar">
                <a href="#publico">Público-alvo</a>
                <a href="#equipe">Equipe</a>
            </nav>

            <div className="footer-copy">
                <p>Challenge Front-end Design</p>
                <p>© 2026 SnapNote</p>
            </div>
        </footer>


    );
}
