import { HiInbox , HiStar , HiPaperAirplane , HiDocumentText , HiChat , HiBookmark , HiMail, HiInformationCircle , HiClock, HiTrash} from 'react-icons/hi'
const size = "22"
const NavData = [
    {
        nombre: "Recibidos",
        link: "#recibidos",
        icons: <HiInbox size = {size}/>
    },
    {
        nombre: "Destacados",
        link: "#destacados",
        icons: <HiStar size = {size}/>
    },
    {
        nombre: "Pospuestos",
        link: "#pospuestos",
        icons: <HiClock size = {size}/>
    },
    {
        nombre: "Enviados",
        link: "#enviados",
        icons: <HiPaperAirplane size = {size}/>
    },
    {
        nombre: "Borradores",
        link: "#borradores",
        icons: <HiDocumentText size = {size}/>
    },
]

const NavSecondaryData = [
    {
        nombre: "Importantes",
        link: "#importantes",
        icons: <HiBookmark size = {size}/>
    },
    {
        nombre: "Chats",
        link: "#chats",
        icons: <HiChat size = {size}/>
    },
    {
        nombre: "Todos",
        link: "#todos",
        icons: <HiMail size = {size}/>
    },
    {
        nombre: "Spam",
        link: "#spam",
        icons: <HiInformationCircle size = {size}/>
    },
    {
        nombre: "Papelera",
        link: "#papelera",
        icons: <HiTrash size = {size}/>
    },
]

export {NavData, NavSecondaryData}