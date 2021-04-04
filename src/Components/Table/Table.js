import React from 'react'
import { Table , Row, Col } from 'react-bootstrap'
import {TableData} from './TableData'
export default function Tables() {
    return (
            <Table>
                {
                    TableData.map(item  => (
                        <tr>
                            <td>{item.input}</td>
                            <td>{item.icon}</td>
                            <td><b>{item.name}</b></td>
                            <td><b>{item.description}</b></td>
                            <td></td>
                            <td>{item.time}</td>
                        </tr>
                    ))
                }
            </Table>
    )
}
