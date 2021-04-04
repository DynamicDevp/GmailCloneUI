import React, {useState} from 'react'
import './Assets/App.css';
import Navibar from './Components/Navibar/Navibar'
import Sidebar from './Components/Sidebar/Sidebar';
import Table from './Components/Table/Table';
import TableTop from './Components/Table/TableTop';
function App() {
  const[sidebar, setSidebar] = useState(false)
  const ShowSidebar = () => (setSidebar(!sidebar))
  return (
    <div className="App">
      <Navibar onShow = {ShowSidebar}/>
      <Sidebar Show = {sidebar}/>
      <div className = {sidebar ? "content active" : "content"}>
        <TableTop/>
        <Table/>
      </div>
    </div>
  );
}

export default App;
