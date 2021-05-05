import React, {useState , useEffect} from 'react'
import './Assets/css/App.css';
import Navibar from './Components/Navibar/Navibar'
import Sidebar from './Components/Sidebar/Sidebar';
import SidebarRight from './Components/SidebarRight/SidebarRight'
import Table from './Components/Table/Table';
import TableTop from './Components/Table/TableTop';
import FormFixed from './Components/FormFixed/FormFixed';
import MailContext from './Context/MailContext';
import TopContent from './Components/TopContent/TopContent';
import mails from './mails.json'
import {useSidebar} from './Context/SidebarContext'

function App() {
  const {sidebar} = useSidebar()
  const[mail, setMail] = useState([])
  useEffect(() => {
    setMail(mails)
  }, [])
  return (
    <div className="App">
      <Navibar/>
      <Sidebar/>
      <SidebarRight/>
      <TopContent/>
      <div className = {sidebar ? "content active" : "content"}>
        <TableTop/>
        <MailContext.Provider value = {mail}>
          <Table/>
        </MailContext.Provider>
      </div>
      <FormFixed/>
    </div>
  );
}

export default App;
