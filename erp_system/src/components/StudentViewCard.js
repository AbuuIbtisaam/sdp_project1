import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <Grid container alignItems="center" spacing={2} justifyContent="space-between">             
            <Grid item>
             <CardContent> 
                <Grid container justifyContent="left" spacing={2}>
                    <Grid item>
                        <Typography textAlign ='center'>
                            ID
                        </Typography>                        
                        <Typography>
                            2100032583
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography textAlign ='center'>
                            First Name
                        </Typography>
                        <Typography textAlign ='center'>
                            Mansoor
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography textAlign ='center'>
                            Last Name
                        </Typography>
                        <Typography textAlign ='center'>
                            Mustapha
                        </Typography>
                    </Grid>
                    <Grid item>
                      <Typography textAlign ='center'>
                            class
                        </Typography>
                        <Typography textAlign ='center'>
                            3 
                        </Typography>
                        
                    </Grid>
                    <Grid item>
                    <Typography textAlign ='center'>
                            Sec
                        </Typography>
                        <Typography textAlign ='center'>
                             A
                        </Typography>
                        
                    </Grid>
                    <Grid item>
                        <Typography textAlign ='center'>
                            Father Name
                        </Typography>
                        <Typography textAlign ='center'>
                            Mustapha Hussein
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography textAlign ='center'>
                            Mobile No
                        </Typography>
                        <Typography textAlign ='center'>
                            0786754321
                        </Typography>
                    </Grid>
                </Grid> 
              </CardContent>
            </Grid>                  
        
        <Grid item>
        <CardActions>
          <Grid container justifyContent ="right"  spacing={2}>          
            <Grid item>
              <Button size="small" variant='outlined'>Edit</Button>
            </Grid>
            <Grid item>
              <Button size="small" variant='outlined'>Delete</Button>
            </Grid>                      
          </Grid>  
        </CardActions>                                          
        </Grid>
      
    </Grid>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
