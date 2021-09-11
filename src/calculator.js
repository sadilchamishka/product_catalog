import './App.css';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Select, FormControl, Grid, MenuItem, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import NavBar from './navbar';

const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    maxWidth: 1200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  const [product, setProduct] = useState('Penguin-ears');         // selected current support category
  const [type, setType] = useState('Carton');         // selected current support category
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  

  // update when support category is changed from drop down menue
const changeProduct = (event) => {
    setProduct(event.target.value);
}

const changeType = (event) => {
    setType(event.target.value);
}

const changQuantity = (event) => {
  setQuantity(event.target.value);
}

const calCulatePrice = async (event) => {
  setPrice(10);
  const response = await fetch("http://a5d7-112-134-51-93.ngrok.io/products/pricing/list");
  const data = await response.json();
}


  return (
    <div className="App">
        <NavBar/> <br/><br/><br/><br/><br/><br/>
    <Grid>
      <Paper className={classes.paper}>
      <div>        
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4}>
                  <FormControl>
                    <Select value={product} onChange={changeProduct} className="dropdown" variant="outlined">
                      <MenuItem value="Penguin-ears">Penguin-ears</MenuItem>
                      <MenuItem value="Horseshoe">Horseshoe</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              
              <Grid item xs={"auto"} sm={"auto"}>
                <TextField value={quantity} onChange={changQuantity} autoComplete="fname" name="Quantity" variant="outlined" required id="firstName" label="Quantity" autoFocus/>
              </Grid>

              <Grid item xs={"auto"} sm={"auto"}>
                <FormControl>
                        <Select value={type} onChange={changeType} className="dropdown" variant="outlined">
                        <MenuItem value="Carton">Carton</MenuItem>
                        <MenuItem value="Units">Units</MenuItem>
                        </Select>
                    </FormControl>
              </Grid>
              <Button type="submit" variant="contained" onClick={calCulatePrice} color="primary" className={classes.submit}> Calculate </Button>

          </Grid>  
          
        </form>
        <br/><br/>
        
        <div align="center">
             <Box width="25%" border={1} value={price}>
                  <br/>
                  {price}
                  <br/> <br/>
             </Box>
        </div>
        
      </div>
    </Paper>
  </Grid>
      
    </div>
  );
}

export default App;
