import React from "react";
import ProjectList from './plist';
import Contact from "./contact";

function Projects () {

    return (
        <div className="d-flex flex-column">
            <h1 className="pt-4 text-center">Greetings!</h1>
            <div className="d-flex justify-content-center">
                <p className="pb-2 w-75 text-center">My name is Quintus Thibodeaux. Thank you for visiting my webpage. I am a nerd who enjoys computers, sports, statistics, and music. I have been employed in various industries, but the challenge and problem solving of programming really appealed to me. I decided to dive right in, and pursue a career change. I enrolled in DigitalCrafts, an immersive coding bootcamp focusing on the most modern web technologies.</p>
            </div>
            <div className="pt-2 pb-4 justify-content-center" id="projectanchor">
                <h1 style={{"text-decoration":"underline"}}><strong>Projects</strong></h1>
            </div>
            
            <ProjectList />
            <Contact />
        </div>
    )
}

export default Projects