export default function MobileButton({ menuOpen, setMenuOpen }) {
    return (
        <button className={`nav-mobile-menu ${menuOpen ? 'close' : ''}`} onClick={() => setMenuOpen(prev => !prev)}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}