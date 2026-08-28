'use client'

import Image from "next/image";
import SectionTag from "../SectionTag/sectionTag";
import TeamCard from "../UI-Components/TeamCard/TeamCard";
export default function Time({ time }) {

    return (
        <section id="equipe" className="team-section">
            <div className="team-heading">
                <div>
                    <SectionTag name="Nossa Equipe" />
                    <h2>Quem dá vida<br /><span>ao SnapNote.</span></h2>
                </div>
            </div>

            <div className="team-cards">

                {time && time.length > 0 ?
                    time.map((partner, index) => (
                        <TeamCard partner={partner} index={index + 1} key={partner.rm} />
                    ))
                    : null
                }
            </div>
        </section>


    );
}
