import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Name () {

    const MyStyle = {
        background: '#013220',
        color: 'white'
    }

    return (
        <div style={MyStyle} className="py-4">
            <Image src="portrait.jpg" rounded/>
            <h1>Quintus Thibodeaux</h1>
            <h3>Full Stack Web Developer</h3>
            <div>
                <Button variant="link" href="https://github.com/qthibodeaux" target="_blank">Github</Button>
                <Button variant="link" href="https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/" target="_blank">LinkedIn</Button>
            </div>
        </div>
    )
}

export default Name