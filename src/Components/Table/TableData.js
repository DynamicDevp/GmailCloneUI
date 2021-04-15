import {HiInbox, HiUsers, HiTag, HiOutlineStar, HiTrash} from 'react-icons/hi'
import shortid from 'shortid'
const TableData = [
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>,
        id: shortid.generate()
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>,
        id: shortid.generate()
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>,
        id: shortid.generate()
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>,
        id: shortid.generate()
    },
    {
        name : "Mozilla",
        icon : <HiOutlineStar size = "20"/>,
        description : "In celebration of women and girls everywhere",
        time : "Mar 04",
        action : <HiTrash size = "20"/>,
        id: shortid.generate()
    },
]
const TableTopData = [
    {
        icon : <HiInbox size = "22"/>,
        name : "Principal",
        class: "td-principal",
    },
    {
        icon : <HiUsers size = "22"/>,
        name : "Social",
        class: "td-social",
    },
    {
        icon : <HiTag size = "22"/>,
        name : "Promociones",
        class: "td-promociones",
    }
]

export {TableData,TableTopData}