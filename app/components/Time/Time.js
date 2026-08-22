import Image from "next/image";

export default function Time() {
    return (
        <section id="equipe" className="team-section">
            <div className="team-heading">
                <div>
                    <p className="section-label"><span></span>NOSSA EQUIPE</p>
                    <h2>Quem dá vida<br/><span>ao SnapNote.</span></h2>
                </div>
            </div>

            <div className="team-cards">
                <div className="team-card">
                    <div className="member-image"><span className="member-number">01</span><Image height={350} width={350} src="/images/group/muriloV.jpeg"
                        alt="Foto de Murilo Vieira dos Reis"/></div>
                    <div className="member-info">
                        <h3>Murilo Vieira dos Reis</h3>
                        <p>EQUIPE SNAPNOTE · RM573764</p>
                    </div>
                </div>
                <div className="team-card">
                    <div className="member-image"><span className="member-number">02</span><Image height={350} width={350} src="/images/group/brunoG.jpeg"
                        alt="Foto de Bruno Guilherme Gonçalves"/></div>
                    <div className="member-info">
                        <h3>Bruno Guilherme Gonçalves</h3>
                        <p>EQUIPE SNAPNOTE · RM573697</p>
                    </div>
                </div>
                <div className="team-card">
                    <div className="member-image"><span className="member-number">03</span><Image height={350} width={350} src="/images/group/gabrielL.jpeg"
                        alt="Foto de Gabriel Luna Maia"/></div>
                    <div className="member-info">
                        <h3>Gabriel Luna Maia</h3>
                        <p>EQUIPE SNAPNOTE · RM570982</p>
                    </div>
                </div>
                <div className="team-card">
                    <div className="member-image"><span className="member-number">04</span><Image height={350} width={350} src="/images/group/joaoL.jpeg"
                        alt="Foto de João Lucas Magordo"/></div>
                    <div className="member-info">
                        <h3>João Lucas Magordo</h3>
                        <p>EQUIPE SNAPNOTE · RM572419</p>
                    </div>
                </div>
                <div className="team-card">
                    <div className="member-image"><span className="member-number">05</span><Image height={350} width={350} src="/images/group/gabrielC.jpeg"
                        alt="Foto de Gabriel Cardoso"/></div>
                    <div className="member-info">
                        <h3>Gabriel Cardoso</h3>
                        <p>EQUIPE SNAPNOTE · RM571846</p>
                    </div>
                </div>
            </div>
        </section>


    );
}
