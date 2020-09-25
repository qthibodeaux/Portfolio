import React, { useState } from "react";
import ProjectList from './plist';
import Blog from './blog';
import Updates from './updates';
import Contact from "./contact";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Main () {
    const [key, setKey] = useState('home');

    return (
        <div className="d-flex flex-column">
            <h1 className="pt-4 text-center">Greetings!</h1>
            <div className="d-flex justify-content-center">
                <p className="pb-2 w-75 text-center">My name is Quintus Thibodeaux. Thank you for visiting my webpage. I am a nerd who enjoys computers, sports, statistics, and music. I have been employed in various industries, but the challenge and problem solving of programming really appealed to me. I decided to dive right in, and pursue a career change. I enrolled in DigitalCrafts, an immersive coding bootcamp focusing on the most modern web technologies.</p>
            </div>
            
            <div className="d-flex flex-column w-75 justify-content-center align-self-center" id="tabanchor">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    BackgroundColor={"#E8E8E8"}
                    fluid
                    >
                    <Tab eventKey="home" title="Projects">
                        <ProjectList />
                    </Tab>
                    <Tab eventKey="blog" title="Blog">
                        <Blog />
                    </Tab>
                    <Tab eventKey="updates" title="Site Updates">
                        <Updates />
                    </Tab>
                </Tabs>
            </div>
            <Contact />
        </div>
    )
}

export default Main