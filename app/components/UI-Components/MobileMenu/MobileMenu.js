import Image from "next/image"

export default function MobileMenu({ menuOpen }) {
    return (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <div>
                <a href="#top">
                    <Image src="/images/logo-white.png" alt="Logotipo da plataforma SnapNote" width={50} height={50} />
                </a>
            </div>
            <ul className="nav-hero-menu">
                <li><a href="#top">A Solução</a></li>
                <li><a href="#publico">Público-alvo</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#equipe">Nossa Equipe</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </div>
    )
}