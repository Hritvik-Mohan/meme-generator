import React,{ useState } from "react";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/23ls.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    console.log(allMemes)

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/23ls.jpg")

    // let url;
    function getMemeImage() {
        // let memesArray = allMemes.data.memes;
        var randomNumber = Math.floor(Math.random()*allMemes.length);
        const url = allMemes[randomNumber].url;
        console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    // function getMemeImage() {
    //     const memesArray = allMemes.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     const url = memesArray[randomNumber].url
    //     setMeme(prevMeme => ({
    //         ...prevMeme,
    //         randomImage: url
    //     }))
        
    // }


    function handleChange (event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <main>
            <div className="form">
                <div className="header--left">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img className="meme--image" src={meme.randomImage} alt="" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}