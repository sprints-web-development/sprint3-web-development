import Caracteristicas from "./components/Caracteristicas/caracteristicas";
import Contato from "./components/Contato/contato";
import Footer from "./components/Footer/footer";
import Galeria from "./components/Galeria/galeria";
import Header from "./components/Header/header";
import Problem from "./components/Problem/problem";
import Publico from "./components/Publics/publics";
import Solution from "./components/Solution/solution";
import Time from "./components/Time/Time";
import Top from "./components/Top/top";
import styles from './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={styles}>
      <body>
        <Header />
        <Top />
        <Problem />
        <Solution />
        <Publico />
        <Galeria />
        <Caracteristicas />
        <Time />
        <Contato />
        <Footer />
        
      </body>
    </html>
  );
}
