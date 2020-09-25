import React from 'react';
import { updates } from "./info";
import ListGroup from 'react-bootstrap/ListGroup';

function UpdateItem (props) {
    return (
        <ListGroup.Item>
            {props.element.content}
        </ListGroup.Item>
    )
}

function Updates () {
    return (
        <div  className="pb-4" >
            <div className="pt-2 pb-4 justify-content-center">
                <h1 style={{"text-decoration":"underline"}}><strong>Site Updates</strong></h1>
            </div>
            <ListGroup>
                {updates.map((element, Index) => {
                    return <UpdateItem element={element} Index={Index} />
                })}
            </ListGroup>
        </div>
    )
}

export default Updates