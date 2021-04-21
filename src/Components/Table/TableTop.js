import React from 'react'
import { Table, Row, Badge } from 'react-bootstrap';
import { TableTopData } from './TableData';
export default function TableTop() {
    return (
        <Table className = "table-top">
            <tbody>
                <tr>
                    { TableTopData.map((item, index) => (
                        <td className = {item.class} key = {index}>
                            <Row className = "content-top">
                                <div className = "icon-top">
                                    {item.icon}
                                </div>
                                <div className = "name-top">
                                    {item.name}
                                    <Badge variant = {item.variant} className= "ml-2">{item.recibidos}</Badge>
                                </div>
                            </Row>
                        </td>
                    ))
                    }
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
}
