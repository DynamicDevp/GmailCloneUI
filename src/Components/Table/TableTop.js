import React from 'react'
import { Table, Row, Col } from 'react-bootstrap';
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
