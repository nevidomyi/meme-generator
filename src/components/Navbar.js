import React from "react";

export default function Navbar() {
    return(
        <nav>
            <img 
                src="./image/meme-logo.png"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </nav>
    )
}