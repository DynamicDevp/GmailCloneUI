import React, {useContext , useEffect}from 'react'
import { Table, Button, Badge } from 'react-bootstrap'
import MailContext from '../../Context/MailContext'
import {TableData} from './TableData'
export default function Tables() {
    const [mail, setMail] = useContext(MailContext)
    useEffect(() => {
        setMail(TableData)
    }, [])
    return (
            <Table>
                {
                    mail.map((item,index)  => (
                        <tr className = "table-content" key = {"tr" + index}>
                            <td><Button className = "btn-actions">{item.action}</Button></td>
                            <td><Button className = "btn-star">{item.icon}</Button></td>
                            <td><b>{item.name}</b></td>
                            <td><b>{item.description}</b></td>
                            <td></td>
                            <td><h5><Badge variant="danger">{item.time}</Badge></h5></td>
                        </tr>
                    ))
                }
            </Table>
    )
}
