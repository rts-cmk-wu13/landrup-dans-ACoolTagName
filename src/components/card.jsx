

export default function Card({ image, headline, text }) {
    return (
        <div className="card">
            <img src={image} alt="Her er en text" />
            <h2>{headline}</h2>
            <p>
                {text}
            </p>
        </div>
    )
}

