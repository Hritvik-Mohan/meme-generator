import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <div>
                <div className="header--left">
                    <div className="logo-container">
                        <img
                            src={trollFace}
                            alt="Troll Face"
                            className="header--image"
                        />
                    </div>
                    <h2 className="header--title">Meme Generator</h2>
                </div>
                <h4 className="header--project">React Component - Project 3</h4>
            </div>
        </header>
    )
}