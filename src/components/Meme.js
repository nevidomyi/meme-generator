import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // let url;

    // const [memeImage, setMemeImage] = React.useState('https://i.imgflip.com/9ehk.jpg');

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

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

    return(
        <main>
            <div className="form">
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
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼️</button>
            </div >
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}