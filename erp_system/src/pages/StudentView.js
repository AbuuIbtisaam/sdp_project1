import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { postStudent } from '../utils/api';
import { Container, Grid } from '@mui/material';
import StudentViewTable from '../components/StudentViewTable';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [state, setState] = useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setState((old) => ({...old, [name]: value}));
  }
  const handleSubmit = () => {
    postStudent(state).then(() => {
      setState({});
      setOpen(false);
    })
  }
 

  return (
    <div>
      <Grid container rowSpacing={2}>
        <Grid item xs= {12}>
          <Button alignItem="center" variant="contained" onClick={handleClickOpen}>
            Add Student
          </Button>
        </Grid>
        <StudentViewTable 
          data = {data}
          setData = {setData}
        />
      </Grid>
      
      
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle id='form-dialog-title'>Register Student</DialogTitle>
        <DialogContent>   
            <Container>
                <br></br>
            <h4>Student Details</h4>
            <br></br>
                <Grid container spacing={4}>
                    <Grid item>
                        <TextField
                            name='fName'
                            fullWidth
                            required
                            label="First Name"
                            value={state.fName}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name='lName'
                            fullWidth
                            required
                            label="Last Name"
                            value={state.lName}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item xs={15}>
                        <TextField
                            name='rollNumber'
                            fullWidth
                            required
                            label="Roll Number"
                            value={state.rollNumber}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item xs={15}>
                        <TextField
                            name='studClass'
                            fullWidth
                            label="Class"
                            value={state.studClass}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item xs={15}>
                        <TextField
                            name='Section'
                            fullWidth
                            label="Section"
                            value={state.Section}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                        <h4><br></br>Parent Details</h4>
                    </Grid>
                    
                
                    <Grid item xs={15}>
                        <TextField
                            name='fatherName'
                            fullWidth
                            required
                            label="Father Name"
                            value={state.fatherName}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item xs={15}>
                        <TextField
                            name='motherName'
                            fullWidth
                            required
                            label="Mother Name"
                            value={state.motherName}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name='MobileNo1'
                            fullWidth
                            required
                            label="Mobile Number 1"
                            value={state.MobileNo1}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name='MobileNo2'
                            fullWidth
                            label="Mobile number 2"
                            value={state.MobileNo2}
                            variant="outlined"
                            onChange={handleChange}
                            //className={classes.dialogInput}                        
                        />
                    </Grid>
                    
                </Grid>       
            </Container>
          
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
