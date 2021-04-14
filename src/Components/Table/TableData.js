import {HiOutlineStar , HiInbox, HiUsers, HiTag , HiTrash} from 'react-icons/hi'
const TableData = [
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>
    },
]

const TableTopData = [
    {
        icon : <HiInbox size = "22"/>,
        name : "Principal",
        names: <p className = "names-top">Mozilla, News, Gmail</p>,
        class: "td-principal",
    },
    {
        icon : <HiUsers size = "22"/>,
        name : "Social",
        names: <p className = "names-top">Facebook, LinkedIn, Gmail</p>,
        class: "td-social",
    },
    {
        icon : <HiTag size = "22"/>,
        name : "Promociones",
        names: <p className = "names-top">Bitcoin, Shop, Gmail</p>,
        class: "td-promociones",
    }
]

export {TableData, TableTopData}