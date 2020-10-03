import React from 'react';
import { updates } from "./info";
import Table from 'react-bootstrap/Table';

function TableUpdate (props) {
    return (
        <tr>
            <td>{props.element.date}</td>
            <td>{props.element.content}</td>
        </tr>
    )
}

function Updates () {
    return (
        <div  className="pb-4" >
            <div className="pt-2 pb-4 justify-content-center">
                <h1 style={{"text-decoration":"underline"}}><strong>Site Updates</strong></h1>
            </div>
            <Table striped bordered hover>
                <tbody>
                    {updates.map((element, Index) => {
                        return <TableUpdate element={element} Index={Index} />
                    })} 
                </tbody>
            </Table>
        </div>
    )
}

export default Updates