import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { projects } from "./info";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function PItem (props) {

    var buttonStyle = {
        visibility: props.element.hassite,
    }
    
    return (
        <ListGroup.Item className="py-4 text-left" >
            <Container>
                <Row>
                    <Col lg className="d-flex flex-column py-2">
                        <h2>{props.element.name}</h2>
                        <h4>{props.element.headline}</h4>
                        <p>{props.element.caption}</p>
                        <div>
                            <Button variant="secondary" href={props.element.githubrepo} className="visible px-2">Github</Button>{' '}
                            <Button variant="secondary" href={props.element.site} className="px-2" style={buttonStyle}>Site</Button>
                        </div>
                    </Col>
                    <Col lg className="d-flex">
                        <Image src={props.element.gif} fluid/>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )
}

function PList () {

    const [dropdownName, setName] = useState('All');
    const [display, setDisplay] = useState(projects)

    const menus = [
        { name: 'All', value: '1' },
        { name: 'Bootstrap', value: '2' },
        { name: 'Handlebars', value: '3' },
        { name: 'Express.JS', value: '4' },
        { name: 'Postgresql', value: '5' },
        { name: 'React', value: '6' },
        { name: 'Redux', value: '7' },
      ];

      const jump = (name, value) => {
          setName(name)

          switch (value) {
              case '1': { setDisplay(projects); break; }
              case '2': { setDisplay(projects.filter((word) => {return word.tags.bootstrap === true})); break; }
              case '3': { setDisplay(projects.filter((word) => {return word.tags.handlebars === true})); break; }
              case '4': { setDisplay(projects.filter((word) => {return word.tags.expressjs === true})); break; }
              case '5': { setDisplay(projects.filter((word) => {return word.tags.postgres === true})); break; }
              case '6': { setDisplay(projects.filter((word) => {return word.tags.react === true})); break; }
              case '7': { setDisplay(projects.filter((word) => {return word.tags.redux === true})); break; }
              default: { setDisplay(projects) }
          }
      }

    return (
        <div className="d-flex flex-column py-4"> 
        
            <div className="pt-2 pb-4 justify-content-center">
                <h1 style={{"text-decoration":"underline"}}><strong>Projects</strong></h1>
            </div>
            <DropdownButton id="dropdown-basic-button" title={dropdownName} variant="secondary" className="pb-4">
                {menus.map((element) => {
                    return <Dropdown.Item onClick={(e) => jump(element.name, element.value)}>{element.name}</Dropdown.Item>
                })}
            </DropdownButton>

            <ListGroup>
                {display.map((element, index) => {
                    return <PItem element={element} index={index} />
                })}
            </ListGroup>
        </div>
    )
}

export default PList