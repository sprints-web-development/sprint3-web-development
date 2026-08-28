import Image from "next/image"

export default function ImageBorder({ card, index }) {
    return (
        <div className="image-border">
            <Image src={card.src} alt="" width={350} height={150} />
            <div className="images-subtitles">
                <p className="number">{index}</p>
                <div>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                </div>
            </div>
        </div>
    )
}