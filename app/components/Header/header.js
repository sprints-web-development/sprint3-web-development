'use client'
import Image from "next/image";
import { useState } from "react";

export default function Header() {

  const[menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header-nav">
      <a href="#top">
        <div className="header-logo">
          <Image src="/images/logo.png" alt="Logotipo da plataforma SnapNote" width={50} height={50} />
          <p>Snap<span>Note</span></p>
        </div>
      </a>
      <nav>
        <ul className="nav-hero-menu">
          <li><a href="#top">A Solução</a></li>
          <li><a href="#publico">Público-alvo</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#equipe">Nossa Equipe</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <button className={`nav-mobile-menu ${menuOpen ? 'close' : ''}`} onClick={() => setMenuOpen(prev => !prev)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
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
    </header>

  );
}
