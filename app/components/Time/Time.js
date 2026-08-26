'use client'

import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
export default function Time({ time }) {

    return (
        <section id="equipe" className="team-section">
            <div className="team-heading">
                <div>
                    <SectionTag name="Nossa Equipe"/>
                    <h2>Quem dá vida<br /><span>ao SnapNote.</span></h2>
                </div>
            </div>

            <div className="team-cards">
                
                {time && time.length > 0 ?
                    time.map((partner, index) => (
                        <div key={index} className="team-card">
                            <div className="member-image"><span className="member-number">{index + 1}</span><Image height={350} width={350} src={`${partner.path}`}
                                alt={`Foto de ${partner.nome}`} /></div>
                            <div className="member-info">
                                <h3>{partner.nome}</h3>
                                <p>EQUIPE SNAPNOTE · {partner.rm}</p>
                            </div>
                        </div>
                    ))
                    : null
                }

            </div>
        </section>


    );
}
