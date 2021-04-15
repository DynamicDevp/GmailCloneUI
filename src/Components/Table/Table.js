import React, {useContext}from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import MailContext from '../../Context/MailContext'

export default function Tables() {
    const [mail, setMail] = useContext(MailContext)
    const DeleteMail = (id) => {
        const datafilter = mail.filter(item => item.id !== id)
        setMail(datafilter)
    }
    return (
            <Table>
                {
                    mail.map((item,index)  => (
                        <tr className = "table-content" key = {"tr" + index}>
                            <td></td>
                            <td><b>{item.name}</b></td>
                            <td><b>{item.description}</b></td>
                            <td></td>
                            <td><h5><Badge variant="danger">{item.time}</Badge></h5></td>
                            <td><Button className = "btn-actions" onClick = {() => DeleteMail(item.id)}>{item.action}</Button></td>
                            <td><Button className = "btn-star">{item.icon}</Button></td>
                        </tr>
                    ))
                }
            </Table>
    )
}
