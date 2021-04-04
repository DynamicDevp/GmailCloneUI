import React from 'react'
import { Table, Row, Col } from 'react-bootstrap';
import { TableTopData } from './TableData';
export default function TableTop() {
    return (
        <Table className = "table-top">
            <tr>
                { TableTopData.map(item => (
                    <td className = {item.class}>
                        <Row className = "content-top">
                            <div className = "icon-top">
                                {item.icon}
                            </div>
                            <div className = "name-top">
                                {item.name}
                                {item.names}
                            </div>
                        </Row>
                    </td>
                ))
                }
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </Table>
    )
}
