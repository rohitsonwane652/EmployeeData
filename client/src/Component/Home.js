import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';

const columns = [
  { field: 'employeeid', headerName: 'Index', width: 60 },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'city', headerName: 'City', width: 200 },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'salary', headerName: 'Salary', width: 200 },
]


function Home() {
  const [data, setData] = useState([]);
  const [currentRow, setCurrentRow] = useState(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [addData, setAddData] = useState([
    {
      name: '',
      email: '',
      age: '',
      salary: '',
      employeeid: '',
      city: ''
    }
  ])
  const [state, setState] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(`http://localhost:5000/`)
      setData(response.data)
    }
    fetchdata();
  }, [state]);

  async function getEmployeeData() {
    const employee = currentRow;
    const response = await axios.get(`http://localhost:5000/data/search/${employee.email}`)
    setCurrentRow(response.data)
    setState(false);
  }

  return (
    <Container style={{ height: '55vh' }}>
      <h1 className="text-center">Employee Data</h1>
      <UpdateEmployee
        currentRow={currentRow}
        setCurrentRow={setCurrentRow}
        showEditDialog={showEditDialog}
        setState={setState}
        setShowEditDialog={setShowEditDialog}
      />

      <Button variant='contained' color='primary' style={{ marginBottom: 10 }} disabled={!currentRow} onClick={() => { setShowEditDialog(true); getEmployeeData() }}>
        Edit
      </Button>

      <AddEmployee
        showAddDialog={showAddDialog}
        setShowAddDialog={setShowAddDialog}
        addData={addData}
        setAddData={setAddData}
        setState={setState}
      />
      <Button variant='contained' color='primary' style={{ marginBottom: 10, marginLeft: 10 }} onClick={() => { setShowAddDialog(true) }}>
        Add
      </Button>


      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(r) => r._id}
        onRowClick={(item) => setCurrentRow(item.row)}
        pageSize={5}
      />
    </Container>
  )
}

export default Home