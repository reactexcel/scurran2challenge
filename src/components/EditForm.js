import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EditHotelListRequest,
  UpdateHotelRequest,
} from "../redux/actions/index";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";

const EditForm = () => {
  const { editListStatus } = useSelector((state) => state);
  const [hotelImage, setHotelImage] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);
  const [edithotelDetails, setEditHotelDetails] = useState({
    hotelimage: "",
    hotelname: "",
    star: "",
    manager: "",
    address1: "",
    address2: "",
    pincode: "",
    advance_days: "",
    id: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, "hoteleditedid");

  useEffect(() => {
    dispatch(EditHotelListRequest({ id }));
  }, []);
  console.log(editListStatus, "list");

  useEffect(() => {
    
    let editDetails = editListStatus?.editList?.result[0];
    console.log(editDetails,'====-0--0')
    if (editListStatus?.editList?.result?.length) {
      setEditHotelDetails({
        ...edithotelDetails,
        hotelname: editDetails?.name,
        star: editDetails?.hotel_type?.split(" ")[0],
        manager: editDetails?.manager,
        address1: editDetails.address_line1,
        address2: editDetails?.address_line2,
        pincode: editDetails?.pincode,
        advance_days: editDetails?.no_of_days_advance,
        hotelimage: editDetails?.hotel_image,
        id: id,
      });
    }
  }, [editListStatus]);

  const handleChange = (key, value) => {
    console.log(key, value, 'keyValuePair')
    setEditHotelDetails({
      ...edithotelDetails,
      [key]: value,
    });
  };
  console.log(edithotelDetails, "--------");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(edithotelDetails, "lkjhgfdsa");
    let formdata = new FormData();
    formdata.append(" hotel_type ", `${edithotelDetails?.star}star`);
    formdata.append("manager", `${edithotelDetails?.manager}`);
    formdata.append(" address_line1", `${edithotelDetails?.address1}`);
    formdata.append(" address_line2", `${edithotelDetails?.address2}`);
    formdata.append("pincode", `${edithotelDetails?.pincode}`);
    formdata.append(" no_of_days_advance", `${edithotelDetails?.advance_days}`);
    formdata.append(" hotel_image", `${edithotelDetails?.hotelimage}`);
    formdata.append("id", `${id}`);
    dispatch(UpdateHotelRequest({ id, formdata }));
    setEditHotelDetails({
      hotelimage: " ",
      hotelname: "",
      star: "",
      manager: "",
      address1: "",
      address2: "",
      pincode: "",
      advance_days: "",
      id: " ",
    });
  };

  const handleCanceleditHotel = () => {
    navigate("../dashboard", { replace: true });
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
        <form
          autoComplete="off"
          className="bg-primary-clr"
          onSubmit={handleSubmit}
        >
          <header className="flex justify-between bg-orange-cus-1 py-3  px-4 text-white">
            <h2 className="text-center text-lg font-bold ">Edit Field</h2>
          </header>
          <div className="px-8 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="cardimg">
                <Card>
                  <CardMedia
                    component="img"
                    image={edithotelDetails.hotelimage}
                    alt={edithotelDetails.name}
                  />
                </Card>
              </div>
              <div className="mb-4 w-full px-8 py-4">
                <Button
                  variant="contained"
                  component="label"
                  style={{ margin: 8 }}
                >
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
                    onChange={(e) => handleChange("hotelname", e.target.value)}
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
                    onChange={(e) => handleChange("star", e.target.value)}
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
                    onChange={(e) => handleChange("address1", e.target.value)}
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
                    onChange={(e) => handleChange("address2", e.target.value)}
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
                    onChange={(e) => handleChange("pincode", e.target.value)}
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
                    onChange={(e) => handleChange("advance_days", e.target.value)}
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
                  onChange={(e) => handleChange("manager", e.target.value)}
                  />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between pb-4">
              <Button variant="text" type="submit">
                Add
              </Button>

              <Button variant="outlined" onClick={handleCanceleditHotel}>
                cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
      );
    </Grid>
  );
};
export default EditForm;