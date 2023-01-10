import React from "react";
// import memesData from "../memesData";

export default function Meme() {
    const placeholderInit = "https://i.imgflip.com/1bij.jpg";

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage: placeholderInit,
    });

    const [allMemeImages, setAllMemeImages] = React.useState({});

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data)
        }
        getMemes()
    }, [])

    // useEffect without async/await and don't cleaned up 
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemeImages(data))
    // }, [])

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 2));
    }

    function getMemeImage() {
        const memesArr =  allMemeImages.data.memes;
        let randomMeme  = memesArr[getRandomInt(1, memesArr.length)];
        const url = randomMeme.url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url, 
        }));

        console.log(randomMeme);
    }

    function handlerText(event) {
        const {name, value} = event.target;

        setMeme(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    autocomplete="off"
                    className="form--input"
                    name="topText"
                    onChange={handlerText}
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    autocomplete="off"
                    className="form--input"
                    name="bottomText"
                    onChange={handlerText}
                    value={meme.bottomText}
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼️</button>
            </div >
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}