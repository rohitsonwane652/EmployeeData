import React from 'react'
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, TextField } from '@mui/material'
import axios from 'axios'

function UpdateEmployee({ currentRow, setCurrentRow, setState, setShowEditDialog, showEditDialog }) {
    const updateRow = () => {
        async function fetch() {
            await axios.post(`http://localhost:5000/data/update/${currentRow.email}`, currentRow);
            console.log(currentRow)
        }
        fetch();
        setShowEditDialog(false);
        setState(true);
    }

    const handleChange = (e) => {
        setCurrentRow({ ...currentRow, [e.target.name]: e.target.value });
    }
    return (
        <>
            {
                currentRow && <Dialog open={showEditDialog}>
                    <DialogTitle>Update Data Table</DialogTitle>
                    <DialogContent>
                        <TextField label="EmployeeId" placeholder='Enter Your Id' name="employeeid" fullWidth value={currentRow.employeeid} style={{ marginTop: 10 }} onChange={handleChange} disabled />
                        <TextField label="Email" placeholder='Enter Your Email' name="email" fullWidth value={currentRow.email} style={{ marginTop: 10 }} onChange={handleChange} disabled />
                        <TextField label="Name" placeholder='Enter Your name' name="name" fullWidth value={currentRow.name} style={{ marginTop: 10 }} onChange={handleChange} />
                        <TextField label="City" placeholder='Enter Your city' name="city" fullWidth value={currentRow.city} style={{ marginTop: 10 }} onChange={handleChange} />
                        <TextField label="Age" placeholder='Enter Your Age' name="age" fullWidth value={currentRow.age} style={{ marginTop: 10 }} onChange={handleChange} />
                        <TextField label="Salary" placeholder='Enter Your Salary' name="salary" fullWidth value={currentRow.salary} style={{ marginTop: 10 }} onChange={handleChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={updateRow} >
                            Update
                        </Button>
                        <Button variant="coutlined" color="primary" onClick={() => setShowEditDialog(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </>
    )
}

export default UpdateEmployee