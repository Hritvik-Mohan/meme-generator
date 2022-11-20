import memesData from "../memesData"

export default function Meme() {
    let url;
    function handleBtnClicked() {
        let memesArr = memesData.data.memes;
        let length = memesArr.length;
        var meme = memesArr[Math.floor(Math.random()*length)];
        url = meme.url
        console.log(url)
    }
    return (
        <main>
            <div>{url}</div>
            <div className="form">
                <div className="header--left">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </div>
                <button
                    onClick={handleBtnClicked}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}