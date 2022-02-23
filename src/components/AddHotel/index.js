import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import { useDispatch } from "react-redux";
import { AddHotelRequest } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
// import { addHotelRequest } from "../../redux/saga/addHotel";

export default function AddHotel() {
  const [hotelDetails, setHotelDetails] = React.useState({
    hotelname: "",
    star: "",
    manager: "",
    address1: "",
    address2: "",
    pincode: "",
    advance_days: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hotelImage, setHotelImage] = React.useState("");

  const handleUploadImage = (e) => {
    var file = e.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setHotelImage({
        hotelImage: [reader.result],
      });
    };
    setHotelImage(e.target.files[0]);
  };

  const handleAddHotel = (e) => {
    setHotelDetails((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitAddHotel = () => {
    dispatch(
      AddHotelRequest({
        name: hotelDetails.hotelname,
        hotel_type: `${hotelDetails.star} star`,
        address_line1: hotelDetails.address1,
        address_line2: hotelDetails.address2,
        pincode: hotelDetails.pincode,
        no_of_days_advance: hotelDetails.advance_days,
        manager: hotelDetails.manager,
        hotel_image: hotelImage.hotelImage,
      })
    );
  };

  const handleCancelAddHotel = () => {
    navigate("../dashboard", { replace: true});
  };
  console.log(hotelDetails, "==-0-0-0-00-00-");
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      style={{ padding: 5 }}
    >
      <Typography variant="h4" component="div">
        Hotel Details
      </Typography>
      <div style={{ marginBottom: 10 }}>
        <TextField
          required
          id="outlined-required"
          label="Hotel Name"
          name="hotelname"
          value={hotelDetails.hotelname}
          onChange={(e) => handleAddHotel(e)}
        />

        <TextField
          id="outlined-number"
          label="Star Type"
          type="number"
          name="star"
          InputLabelProps={{
            shrink: true,
          }}
          value={hotelDetails.star}
          onChange={(e) => handleAddHotel(e)}
        />
        <TextField
          id="outlined-number"
          label="Manager"
          type="number"
          name="manager"
          InputLabelProps={{
            shrink: true,
          }}
          value={hotelDetails.manager}
          onChange={(e) => handleAddHotel(e)}
        />
        <TextField
          id="outlined-number"
          label="Advance days"
          type="number"
          name="advance_days"
          InputLabelProps={{
            shrink: true,
          }}
          value={hotelDetails.advance_days}
          onChange={(e) => handleAddHotel(e)}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Address 1"
          multiline
          rows={4}
          name="address1"
          value={hotelDetails.address1}
          onChange={(e) => handleAddHotel(e)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Address 2"
          multiline
          rows={4}
          name="address2"
          value={hotelDetails.address2}
          onChange={(e) => handleAddHotel(e)}
        />

        <TextField
          id="outlined-helperText"
          label="Pin code"
          name="pincode"
          type="number"
          value={hotelDetails.pincode}
          onChange={(e) => handleAddHotel(e)}
          //   defaultValue="Default Value"
        />
      </div>
      {hotelImage?.hotelImage && hotelImage?.hotelImage[0] && (
        <CardMedia
          component="img"
          height="200"
          style={{ width: "auto" }}
          image={hotelImage?.hotelImage[0]}
          alt="Paella dish"
          //   minHeight="200"
        />
      )}
      <Button variant="contained" component="label" style={{ margin: 8 }}>
        Upload File
        <input type="file" hidden onChange={handleUploadImage} />
      </Button>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmitAddHotel}
        >
          Add hotel
        </Button>
        <Button variant="outlined" color="error" onClick={handleCancelAddHotel}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
