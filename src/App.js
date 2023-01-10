import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

export default function App() {
    return(
        <div className="app">
            <Navbar/>
            <Meme/>
        </div>
    )
}