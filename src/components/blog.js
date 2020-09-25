import React from 'react';
import Card from 'react-bootstrap/Card';
import { blogs } from './info';
import ListGroup from 'react-bootstrap/ListGroup';

function BlogPost (props) {
    return (
        <div className="pb-4">
            <div className="pt-2 pb-4 justify-content-center">
                <h1 style={{"text-decoration":"underline"}}><strong>Blog</strong></h1>
            </div>
            <ListGroup.Item>
                <Card border="secondary" className="text-left">
                <Card.Header>{props.element.title}</Card.Header>
                <Card.Img variant="top" src={props.element.image} className="w-75 pt-6 mx-auto d-block"/>
                <Card.Body>
                    <Card.Title>{props.element.header}</Card.Title>
                    <Card.Text>{props.element.p1}</Card.Text>
                    <Card.Text>{props.element.p2}</Card.Text>
                    <Card.Text>{props.element.p3}</Card.Text>
                    <Card.Text>{props.element.p4}</Card.Text>
                    <Card.Text>{props.element.p5}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{props.element.date}</Card.Footer>
            </Card>
            </ListGroup.Item>
        </div>
    )
}

function Blog () {
    return (
       <ListGroup>
            {blogs.map((element, index) => {
                return <BlogPost element={element} index={index} />
            })}
        </ListGroup>
    )
}

export default Blog