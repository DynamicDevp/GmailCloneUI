import {HiInbox, HiUsers, HiTag} from 'react-icons/hi'

const TableTopData = [
    {
        icon : <HiInbox size = "22"/>,
        name : "Principal",
        class: "td-principal",
        recibidos: "100",
        variant: "danger"
    },
    {
        icon : <HiUsers size = "22"/>,
        name : "Social",
        class: "td-social",
        recibidos: "80",
        variant: "primary"
    },
    {
        icon : <HiTag size = "22"/>,
        name : "Promociones",
        class: "td-promociones",
        recibidos: "40",
        variant: "success"
    }
]

export {TableTopData}