import React, {useState} from 'react'
import './Assets/App.css';
import Navibar from './Components/Navibar/Navibar'
import Sidebar from './Components/Sidebar/Sidebar';
import Table from './Components/Table/Table';
import TableTop from './Components/Table/TableTop';
import MailContext from './Context/MailContext';

function App() {
  const[sidebar, setSidebar] = useState(false)
  const[mail, setMail] = useState([])
  const ShowSidebar = () => (setSidebar(!sidebar))
  return (
    <div className="App">
      <Navibar onShow = {ShowSidebar}/>
      <Sidebar Show = {sidebar}/>
      <div className = {sidebar ? "content active" : "content"}>
        <TableTop/>
        <MailContext.Provider value = {[mail,setMail]}>
          <Table/>
        </MailContext.Provider>
      </div>
    </div>
  );
}

export default App;
