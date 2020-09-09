import React from "react";
import { Button } from "react-bootstrap";

function Contact () {

    const MyStyle = {
        background: '#013220',
        color: 'white',
        padding: "50px"
    }

    return (
        <div className="d-flex flex-column" id="contactanchor" style={MyStyle} >
            <h5 className="text-center pt-6">Thank you for visiting my site.</h5>
            <h6 className="text-center">Quintus Thibodeaux asdf</h6>
            <h6>Email: qthibgit@gmail.com</h6>
            <h6>Phone: 979-221-6149</h6>
            <a href="https://www.linkedin.com/in/quintus-thibodeaux-4372751b0/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href="https://github.com/qthibodeaux" target="_blank" rel="noopener noreferrer">Github</a>
            <form method="get" action="QuintusResume.docx" className="d-flex flex-column align-self-center mb-10">
                <div>
                    <Button type="submit" className="btn btn-secondary">Resume</Button>
                </div>
                </form>
        </div>
    )
}

export default Contact