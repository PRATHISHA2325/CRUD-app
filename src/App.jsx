import { useState } from 'react'
import './App.css'
import ResponsiveBreakpointsExample from './table.jsx'
import Popup from './popup.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [update, setUpdate] = useState(false);
  const[show,setShow]=useState(false);
  const[tempData,setTempData]=useState({
    NAME:null,
    EMAILID:null,
    PHONENO:null,
    QUALIFICATION:null,
    LOCATION:null
  })

  const handleClose = () => setShow(false);
  const handleShow = (tableData)=>{;
  setTempData(tableData);
  setShow(true)
  };
  return (
    <>
    <Popup  show={show} btnclose={handleClose} fieldData={tempData} setFieldData={setTempData} dataUpdates={update} setDataUpdate={setUpdate}/>

   <ResponsiveBreakpointsExample btnshow={handleShow} dataUpdate={update} setDataUpdate={setUpdate} />
    </>
  )

}
export default App
