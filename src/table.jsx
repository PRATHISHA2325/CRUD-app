import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
function ResponsiveBreakpointsExample(data) {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch('https://67d7ed189d5e3a10152c9b0a.mockapi.io/student/detail', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setTableData(tasks)
    }).catch(error => {
      console.log(error)
    })
  }, [data.dataUpdate]);
  const deleteUser = (id) => {

    fetch(`https://67d7ed189d5e3a10152c9b0a.mockapi.io/student/detail/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("deleted successfully")
      data.setUpdate(!data.dataUpdate)

    }).catch(error => {
      // handle error
    })
  }
  // console.log(tableData)

  
 
  return (
    <div >
      <Button variant="primary" onClick={()=>data.btnshow()}>add</Button>
      <Table variant="primary" className=" fs-4">
        <thead>
          <tr>
            <th className="p-3">SNO</th>
            <th className="p-3">NAME</th>
            <th className="p-3">EMAIL</th>
            <th className="p-3">QUALIFICATION</th>
            <th className="p-3">PHONE NUMBER</th>
            <th className="p-3">LOCATION</th>
            <th className="p-3">ACTION

            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.map((item, value) => {
            console.log(item)

            return (
              <>
                <tr>
                  
                  <td>{value+1}</td>
                  <td className="p-3">{item.NAME}</td>
                  <td className="p-3">{item.EMAILID}</td>
                  <td className="p-3">{item.QUALIFICATION}</td>
                  <td className="p-3">{item.PHONENO}</td>
                  <td className="p-3">{item.LOCATION}</td>

                  <td>  <Button variant="success" className="p-2 m-1" onClick={() => data.btnshow(item)}>Edit</Button>
                    <Button variant="danger" className="p-2 m-1" onClick={() => deleteUser(item.id)}>Delete</Button> </td>
                  <td></td>
                </tr>

              </>
            )
          })}


        </tbody>
      </Table>


    </div>
  );

}

export default ResponsiveBreakpointsExample;