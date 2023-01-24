import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { REMOVE, ADD } from '../redux/actions/index';


export default function CardsDetails() {
  
  const [data, setData]=useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const getData = useSelector((state) => state.productReducer.carts);
  // console.log(getData);

  const compare =()=>{
    let compareProduct = getData.filter((e)=>{
      return e.id == id
    });
    setData(compareProduct);
    // console.log(compareProduct);
  }

  useEffect(()=>{
    compare();
  },[id])

  const dispatch = useDispatch();

  // add Data
  const send = (element)=>{
    // console.log(element);
    dispatch(ADD(element));
  }
  
  // remove dispatch
  const removePro =(id) =>{
    dispatch(REMOVE(id))
    history('/');
  }

  const history = useNavigate();

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Cards  Details  </h2>
      
        <section className="container  border shadow mt-3">
            <div className="itemsdetails d-flex">
                  
               {
                data.map((ele)=>{
                  return(
                    <>
                      <div>
                        <CardMedia
                          component="img"
                          sx={{ height: 260, width:200, m:'1 auto' }}
                          src={ele.image}
                          alt="Mobile"
                          // title="green iguana"
                        />
                      </div>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableRow>
                            <TableCell>
                              <p><strong>Shopping </strong> : Mobiles</p>
                              <p><strong>Name </strong>: {ele.name} </p>
                              <p><strong>Price </strong> : {ele.price} </p>
                              <p><strong>Total </strong>: {ele.price} </p>
                              <div clasName=" mt-5 d-flex justify-content-between rounded" align="center" style={{width:90, backgroundColor:"pink", cursor:"pointer"}}>
                                 {/* <p><strong> Quantity </strong> : 0</p> */}
                                 <span style={{fontSize:24,}}> - </span>
                                 <span style={{fontSize:22,}}> {ele.quantity} </span>
                                 <span style={{fontSize:24,}} onClick={()=>send(ele)} > + </span>
                              </div>
                            </TableCell>
                              
                            <TableCell>
                              <p><strong>Rating </strong> :<span style={{backgroundColor:"green", color:"white", padding:"2px 2px", borderRadius:"5px"}}> 3.5 *</span> </p>
                              <p><strong>Order Review :</strong> Order Placed Here recently </p>
                               <Grid item xs={8}  >
                                 <strong>Remove </strong> : <DeleteIcon sx={{color:"red", cursor:"pointer"}} onClick={()=>removePro(ele.id)} />
                               </Grid>
                            </TableCell> 
                                            
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </>
                  )
                })
               }   

            </div>
        </section>


      </div>
    </>
  )
}
