import React from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField} from '@mui/material'
import axios from 'axios'

function AddEmployee({showAddDialog,addData,setAddData,setState,setShowAddDialog}) {
    const addEmployee = () => {
        async function fetch() {
          await axios.post(`http://localhost:5000/data`, addData);
        }
        fetch();
        setShowAddDialog(false);
        setState(true);
      }

    const handleAddChange = (e) => {
        setAddData({ ...addData, [e.target.name]: e.target.value });
      }
  return (
    <Dialog open={showAddDialog}>
            <DialogTitle>Add Data Table</DialogTitle>
            <DialogContent>
              <TextField type="number" label="EmployeeId" placeholder='Enter Your Id' name="employeeid" fullWidth  style={{ marginTop: 10 }} onChange={handleAddChange} />
              <TextField  label="Name" placeholder='Enter Your name' name="name" fullWidth  style={{ marginTop: 10 }} onChange={handleAddChange} />
              <TextField type="email" label="Email" placeholder='Enter Your Email' name="email" fullWidth  style={{ marginTop: 10 }} onChange={handleAddChange} />
              <TextField  label="City" placeholder='Enter Your city' name="city" fullWidth  style={{ marginTop: 10 }} onChange={handleAddChange} />
              <TextField type="number" label="Age" placeholder='Enter Your Age' name="age" fullWidth  style={{ marginTop: 10 }} onChange={handleAddChange} />
              <TextField type="number" label="Salary" placeholder='Enter Your Salary' name="salary" fullWidth style={{ marginTop: 10 }} onChange={handleAddChange} />
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={addEmployee} >
                Add
              </Button>
              <Button variant="coutlined" color="primary" onClick={() => setShowAddDialog(false)}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
  )
}

export default AddEmployee