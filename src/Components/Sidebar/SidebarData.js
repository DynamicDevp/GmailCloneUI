import { HiInbox , HiStar , HiPaperAirplane , HiDocumentText , HiChat , HiBookmark , HiInformationCircle, HiClock, HiOutlineChevronDown} from 'react-icons/hi'
const size = "22"
const SidebarData = [
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
    {
        nombre: "Chats",
        link: "#chats",
        icons: <HiChat size = {size}/>
    },
    {
        nombre: "Importantes",
        link: "#importantes",
        icons: <HiBookmark size = {size}/>
    },
    {
        nombre: "Más",
        link: "#",
        icons: <HiOutlineChevronDown size = {size}/> 
    }
]

export default SidebarData