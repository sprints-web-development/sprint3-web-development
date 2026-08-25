export default function SectionTag({ name, color }) {
    return (
        <p className="section-label">
            <span style={{background: color}}></span>{name}
        </p>
    );
}