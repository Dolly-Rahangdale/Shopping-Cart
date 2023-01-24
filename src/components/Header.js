import React, { useState, useEffect } from 'react';
import { REMOVE } from '../redux/actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Header(props){

  const [price, setPrice] = useState(0);
  // console.log(price);

    const getData = useSelector((state) => state.productReducer.carts);
    // console.log(getData);

    // const total = ()=>{
    //   let Price = 0;
    //    getData.map((ele,k)=>{
    //       Price = ele.price + price
    //   });
    //   setPrice(Price);
    // };
    // console.log(total)

    // useEffect(()=>{
    //   total();
    // },[total])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <Navbar bg="dark" variant="dark" style={{height:"60px"}} >
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3" >Add to Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined }
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined }
            onClick={handleClick}
          >
            <ShoppingCartIcon sx={{color:'white', fontSize:25, cursor:'pointer'}} />          
          </Badge>
          
        </Container>

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >

          {
            getData.length ? 
            <TableContainer component={Paper} style={{width:"24rem", padding:10}} >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight:"bold"}} >Photo</TableCell>
                    <TableCell sx={{fontWeight:"bold"}} >Mobiles Name</TableCell>
                  </TableRow>
                </TableHead>
                {/* <Divider /> */}
                <TableBody>
                  {
                    getData.map((element)=>{
                      return(
                        <>
                          <TableRow>
                            <TableCell>
                              <NavLink to={`/cart/${element.id}`} onClick={handleClose} >
                                <img src={element.image} style={{cursor:"pointer", width:"5rem", height:"5rem"}} alt="" />
                              </NavLink>
                            </TableCell>
                            <TableCell>
                              <p> Mobile Name :  {element.name} </p>
                              <p> Price : {element.price} </p>
                              <p> Quantity : {element.quantity} </p>
                            </TableCell>
                            <TableCell onClick={()=> props.dispatch(REMOVE(element.id))} >
                               <Grid item xs={8}  >
                                  <DeleteIcon sx={{color:"red", cursor:"pointer"}} />
                                </Grid>
                            </TableCell>
                          </TableRow>
                        </>
                      )
                    })
                  }
                  <p> Total : {price} </p>
                </TableBody>
              </Table>
            </TableContainer>:
            <div className='cart_details my-1 d-flex justify-content-center align-items-center' style={{width:"24rem", paddind:10, position:'relative'}} >
                <CloseIcon className="smallclose"
                 style={{position:"absolute", top:2, right:20, fontSize:23, cursor:"pointer" }} 
                 onClick={handleClose}
                 />
                <p style={{fontSize:22}}>Your Cart is Empty</p>
                <img src="../Images/Cart.png" alt="Cart" className='emptycart_img' style={{width:"5rem", padding:10}} />
            </div>
          }
        </Menu>
      </Navbar>

    )
} 

function mapDispatchToProps(dispatch){
  return(
    {actions: bindActionCreators(REMOVE, dispatch)}
  )
} 
export default connect(mapDispatchToProps)(Header);