import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import StarBorderIcon from "@mui/icons-material/StarBorder";

import { useDispatch } from "react-redux";
import { addRating } from "../../redux/features/ModalSlice";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FF385C",
  },
  "& .MuiRating-iconHover": {
    color: "#FF385C",
  },
  "& .MuiRating-iconEmpty": {
    color: "#FF385C",
  },
});

const InputStarRating = ({ id, valueChange, name }) => {
  const [value, setValue] = useState(0);
  // const [hover, setHover] = useState(-1);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="star--rating">
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <StyledRating
            name="customized-color"
            defaultValue={value}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            size="large"
            value={value}
            onChange={(event, value) => {
              setValue(value);
              valueChange({ value, id, name });
            }}
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </Box>
      </div>
    </div>
  );
};

export default InputStarRating;
