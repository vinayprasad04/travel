import React, { useState } from "react";
// import starEmpty from "../../assets/img/star-regular.svg";
// import starFilled from "../../assets/img/star_filled.svg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function StarRating(props) {

const {setRating,name} = props

//   const [rating, setRating] = useState(0);


  const [starvalue,setStarValue] = useState(0)

  
const changeHandler=(newValue)=>{
    console.log(newValue)
const data = {name:name,value:newValue}   
setRating(data)
}
  

  

  return (
    <>
      <div className="star--rating">
        <Stack spacing={1}>
          <Rating
            name="half-rating"
            value={starvalue}
            precision={0.5}
            onChange={(event, newValue) => {
                console.log(newValue)
                setStarValue(newValue);
                changeHandler(newValue)
              }}
           
          />
        </Stack>
      
      </div>
    </>
  );
}

export default StarRating;
