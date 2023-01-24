import React, { useState } from 'react'
import { ADD } from "../redux/actions/index";
import CardData from './CardData';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards(props){

  const [data, setData] = useState(CardData);
  // console.log(data);

  return (
   <>
     <div className="container mt-3" >
      <h2  className='text-center'>Add to Cart Projects</h2>
    
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((element) => {
            return(
              <>
                <Card sx={{ maxWidth: 300, cursor: "pointer", transition: ".3s" }}  
                className="mx-4 mt-5" 
                // key={id}
                 >
                  <CardMedia
                    component="img"
                    sx={{ height: 190, width:150, m:'0 auto' }}
                    src={element.image}
                    alt="Mobile"
                    // title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {element.name}  (Rs{element.price})
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                    </Typography>
                  </CardContent>
                  <CardActions float="right" >
                    <Button variant="contained" color="success" size="small" cursor="pointer"
                    sx={{ height: 30, width:160, m:'0 auto' }}
                    onClick={()=> props.dispatch(ADD(element))}
                     >Add Cart</Button>
                  </CardActions>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>
   </>
  )
}

function mapDispatchToProps(dispatch){

    return(
        {actions: bindActionCreators(ADD, dispatch)}
    )
}

export default connect(mapDispatchToProps)(Cards);
