import Header from "./components/Header/header";
import styles from './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={styles}>
      <>
        <Header />
      </>
    </html>
  );
}
