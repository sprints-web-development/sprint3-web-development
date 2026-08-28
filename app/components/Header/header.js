'use client'
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "../UI-Components/MobileMenu/MobileMenu";
import MobileButton from "../UI-Components/MobileMenu/MobileButton";

export default function Header() {

  const[menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header-nav">
      <a href="#top">
        <div className="header-logo">
          <Image src="/images/logo.png" alt="Logotipo do SnapNote" width={50} height={50} />
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
      <MobileButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen}/>
    </header>

  );
}
