import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <ul>
                <li className="active">Sapo estranho</li>
                <li>Sapo de lado</li>
                <li>Sapo paz e amor</li>
                <li>Sapo visionário</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/sapo.jpeg" alt="" />
                    <h3>Olhando pro nada</h3>
                </div>
                <div className="item">
                    <img src="assets/sapopaz.jpeg" alt="" />
                    <h3>Sapo dando tchau</h3>
                </div>
                <div className="item">
                    <img src="assets/sapo2.jpeg" alt="" />
                    <h3>Sapo focado</h3>
                </div>
                <div className="item">
                    <img src="assets/download.jpeg" alt="" />
                    <h3>Um belo sapo</h3>
                </div>
            </div>
        </div>
    )
}
