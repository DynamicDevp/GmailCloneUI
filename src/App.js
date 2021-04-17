import React, {useState , useEffect} from 'react'
import './Assets/App.css';
import Navibar from './Components/Navibar/Navibar'
import Sidebar from './Components/Sidebar/Sidebar';
import Table from './Components/Table/Table';
import TableTop from './Components/Table/TableTop';
import FormFixed from './Components/FormFixed/FormFixed';
import MailContext from './Context/MailContext';
import {TableData} from './Components/Table/TableData';

function App() {
  const[sidebar, setSidebar] = useState(false)
  const[form, setForm] = useState(false)
  const[mail, setMail] = useState([])
  const ShowSidebar = () => (setSidebar(!sidebar))
  const ShowForm = () => (setForm(!form))
  useEffect(() => {
    setMail(TableData)
  }, [])
  return (
    <div className="App">
      <Navibar onShow = {ShowSidebar}/>
      <Sidebar Show = {sidebar} onShowForm = {ShowForm}/>
      <div className = {sidebar ? "content active" : "content"}>
        <TableTop/>
        <MailContext.Provider value = {[mail,setMail]}>
          <Table/>
        </MailContext.Provider>
      </div>
      <FormFixed Show = {form}/>
    </div>
  );
}

export default App;
