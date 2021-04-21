import React, {useContext}from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import { HiOutlineStar, HiTrash, HiBookmarkAlt } from 'react-icons/hi'
import MailContext from '../../Context/MailContext'

export default function Tables() {
    const mail = useContext(MailContext)
    return (
            <Table responsive>
                <tbody>
                {
                    mail.map((item,index)  => (
                        <tr className = "table-content" key = {"tr" + index}>
                            <td></td>
                            <td><b>{item.name}</b></td>
                            <td><b>{item.description}</b></td>
                            <td><Button className = "btn-actions"><HiBookmarkAlt size = "20"/></Button></td>
                            <td><Button className = "btn-actions"><HiTrash size = "20"/></Button></td>
                            <td><Button className = "btn-actions"><HiOutlineStar size = "20"/></Button></td>
                            <td><h5><Badge variant="danger">{item.time}</Badge></h5></td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
    )
}
