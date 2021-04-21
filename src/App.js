import React, {useState , useEffect} from 'react'
import './Assets/css/App.css';
import Navibar from './Components/Navibar/Navibar'
import Sidebar from './Components/Sidebar/Sidebar';
import Table from './Components/Table/Table';
import TableTop from './Components/Table/TableTop';
import FormFixed from './Components/FormFixed/FormFixed';
import MailContext from './Context/MailContext';
import TopContent from './Components/TopContent/TopContent';
import mails from './mails.json'

function App() {
  const[sidebar, setSidebar] = useState(false)
  const[form, setForm] = useState(false)
  const[mail, setMail] = useState([])
  const ShowSidebar = () => (setSidebar(!sidebar))
  const ShowForm = () => (setForm(!form))
  useEffect(() => {
    setMail(mails)
  }, [])
  return (
    <div className="App">
      <Navibar onShow = {ShowSidebar}/>
      <Sidebar Show = {sidebar} onShowForm = {ShowForm}/>
      <TopContent Show = {sidebar}/>
      <div className = {sidebar ? "content active" : "content"}>
        <TableTop/>
        <MailContext.Provider value = {mail}>
          <Table/>
        </MailContext.Provider>
      </div>
      <FormFixed Show = {form} onShowForm = {() => setForm(false)}/>
    </div>
  );
}

export default App;
