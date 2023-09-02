import React from "react";
import Sidebar from "./Sidebar"
import Body from "./Body";
import './Player.css'
import Footer from "./Footer";
function Player({spotify}) {
    return (
        <>
            <div className="player">
                {/* <h1>WELCOME TO SPOTIFY</h1>
            <h4>ghjj</h4> */}
                <div className="player_body">
                    <Sidebar />
                    <Body  spotify={spotify}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Player