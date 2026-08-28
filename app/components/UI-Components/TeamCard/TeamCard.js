import Image from "next/image"
export default function TeamCard({ partner, index }) {
    return (
        <div className="team-card">
            <div className="member-image"><span className="member-number">{index}</span><Image height={350} width={350} src={`${partner.path}`}
                alt={`Foto de ${partner.nome}`} /></div>
            <div className="member-info">
                <h3>{partner.nome}</h3>
                <p>EQUIPE SNAPNOTE · {partner.rm}</p>
            </div>
        </div>
    )
}