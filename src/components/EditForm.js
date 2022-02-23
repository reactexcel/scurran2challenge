import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { EditHotelListRequest , UpdateHotelRequest} from "../redux/actions/index";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";


const EditForm = () => {
  const { editListStatus } = useSelector((state) => state);
  const [hotelImage, setHotelImage] = useState("");
  const [edithotelDetails, setEditHotelDetails] = useState({
    hotelimage: " ",
    hotelname: "",
    star: "",
    manager: "",
    address1: "",
    address2: "",
    pincode: "",
    advance_days: "",
  });
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(EditHotelListRequest({ id }));
  }, []);
  console.log(editListStatus, "list");

  useEffect(() => {
    // console.log(editListStatus,'====-0--0')

    const editDetails = editListStatus?.editList?.result[0];
    if (editDetails) {
      setEditHotelDetails((val) => {
        return {
          ...val,
          hotelname: editDetails?.name,
          star: editDetails?.hotel_type?.split(" ")[0],
          manager: editDetails?.manager,
          address1: editDetails.address_line1,
          address2: editDetails?.address_line2,
          pincode: editDetails?.pincode,
          advance_days: editDetails?.no_of_days_advance,
          hotelimage: editDetails?.hotel_image,
        };
      });
    }
  }, [editListStatus]);

  const handleChange = (e) => {
    setEditHotelDetails((val) => {
      return {
        ...val,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(edithotelDetails, "--------");

const handleSubmit = (event) => {
  event.preventDefault()
dispatch(
  UpdateHotelRequest(
 
    {
      name : edithotelDetails?.hotelname , 
      hotel_type : edithotelDetails?.Star,
      manager :edithotelDetails?.manager,
      address_line1 : edithotelDetails?.address1,
      address_line2 : edithotelDetails?.address2,
      pincode : edithotelDetails?.pincode,
      no_of_days_advance : edithotelDetails?.advance_days,
      hotel_image : edithotelDetails?.hotelimage,
      id : edithotelDetails?.id
    }
  )
)
}

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


  return (
    <Grid
      justifyContent="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid
        xs={4}
        md={4}
        item
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      ></Grid>
      <div className="form-container">
        <form autoComplete="off" className="bg-primary-clr"  onClick ={(event) => handleSubmit(event)}>
          <header className="flex justify-between bg-orange-cus-1 py-3  px-4 text-white">
            <h2 className="text-center text-lg font-bold ">Edit Field</h2>
          </header>
          <div className="px-8 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
              <div  className="cardimg">
                <Card>
                  <CardMedia
                    component="img"
                    image={edithotelDetails.hotelimage}
                    alt={edithotelDetails.name}
                  />
                </Card>
              </div>
              <div className="mb-4 w-full px-8 py-4">
              <Button variant="contained" component="label" style={{ margin: 8 }}>
        Upload File
        <input type="file" hidden onChange={handleUploadImage} />
      </Button>
              </div>

              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="Name"
                    label="Name"
                    variant="outlined"
                    name="hotelname"
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                    value={edithotelDetails?.hotelname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="Hotel-Type"
                    label="Hotel-Type"
                    variant="outlined"
                    name="star"
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                    value={`${edithotelDetails?.star}`}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="Address line-1"
                    label="Address line-1"
                    name="address1"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                    value={`${edithotelDetails?.address1}` || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="Address line-2"
                    label="Address line-2"
                    variant="outlined"
                    name="address2"
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                    value={`${edithotelDetails?.address2}` || ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="Pincode"
                    label="Pincode"
                    variant="outlined"
                    name="pincode"
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                    value={edithotelDetails.pincode}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="No of days in advance"
                    label="No of days in advance"
                    variant="outlined"
                    name="advance_days"
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                    value={edithotelDetails?.advance_days || 0}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </section>
            <div className="col-span-4 md:col-span-2">
              <div className="mb-4 w-full">
                <TextField
                  id="manager"
                  label="manager"
                  variant="outlined"
                  name="manager"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
                  value={edithotelDetails?.manager}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between pb-4">
              <Button variant="text"  onClick={handleSubmit}>Add</Button>

              <Button variant="outlined">cancel</Button>
            </div>
          </div>
        </form>
      </div>
      );
    </Grid>
  );
};
export default EditForm;
