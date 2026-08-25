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

  const team = [
    {nome: "Murilo Vieira dos Reis", rm: "RM573764", path: "/images/group/muriloV.jpeg"},
    {nome: "Bruno Guilherme Gonçalves", rm: "RM573697", path: "/images/group/brunoG.jpeg"},
    {nome: "Gabriel Luna Maia", rm: "RM570982", path: "/images/group/gabrielL.jpeg"},
    {nome: "João Lucas Magordo", rm: "RM572419", path: "/images/group/joaoL.jpeg"},
    {nome: "Gabriel Cardoso", rm: "RM571846", path: "/images/group/gabrielC.jpeg"},
  ]

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
        <Time time={team} />
        <Contato />
        <Footer />
        
      </body>
    </html>
  );
}
