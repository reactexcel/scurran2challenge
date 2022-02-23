import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { EditHotelListRequest } from "../redux/actions/index";
import Grid from "@mui/material/Grid";

const EditForm = () => {
  const editList = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(EditHotelListRequest({ id }));
  }, []);

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
      >
        <Typography variant="h5" component="div">
          Hotel Details
        </Typography>
        <Button variant="contained">Add Hotel</Button>
      </Grid>
      {editList?.hotelListStatus?.hotelList?.result.map((val) => {
        return (
          <Grid
            item
            xs={4}
            md={4}
            key={val?.id}
            style={{ marginLeft: "auto", marginRight: "auto", marginTop: 30 }}
          >
            <Card>
              <CardMedia
                component="img"
                image={val.hotel_image}
                alt="Paella dish"
              />
              <CardHeader
                title={val?.name}
                subheader={val.hotel_type}
                subheader={val.hotel_type}
              />

              <CardContent>
                <Typography variant="h5" component="div">
                  Advance Days : {val?.no_of_days_advance || 0}
                </Typography>
                <Typography component="div">
                  Address :{" "}
                  {`${val?.address_line1} ${val?.address_line2}` || ""}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default EditForm;

{
  /* <form autoComplete="off" className="bg-primary-clr">
        <header className="flex justify-between bg-orange-cus-1 py-3  px-4 text-white">
          <h2 className="text-center text-lg font-bold ">Edit Field</h2>
          <Button variant="outlined">
            {" "}
            <CloseIcon />
          </Button>
        </header>
        <div className="px-8 py-4">
          <section className="my-2 grid grid-cols-4 gap-8">
            <div className="col-span-4 md:col-span-2">
              <div className="mb-4 w-full">
                <TextField
                  id="Name"
                  label="Name"
                  variant="outlined"
                  name="Name"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className="mb-4 w-full">
                <TextField
                  id="Hotel-Type"
                  label="Hotel-Type"
                  variant="outlined"
                  name="Hotel-Type"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
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
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className="mb-4 w-full">
                <TextField
                  id="Address line-1"
                  label="Address line-1"
                  variant="outlined"
                  name="Address line-1"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
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
                  name="Pincode"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
                />
              </div>
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className="mb-4 w-full">
                <TextField
                  id="No of days in advance"
                  label="No of days in advance"
                  variant="outlined"
                  name="No of days in advance"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
                />
              </div>
            </div>
          </section>
          <section className="my-2 grid grid-cols-4 gap-8">
            <div className="col-span-4 md:col-span-2">
              <div className="mb-4 w-full">
                <TextField
                  id="Manager"
                  label="Manager"
                  variant="outlined"
                  name="Manager"
                  fullWidth
                  required
                  sx={{ bgcolor: "white" }}
                />
              </div>
            </div>

            <div className="col-span-4 md:col-span-2"></div>
            <button
          className="flex items-center gap-1 rounded-md  bg-gray-cus py-2 px-5 capitalize tracking-wide text-gray-300 
         "
         
        >
          <AddIcon />
          <span>Upload Files</span>
        </button>
          </section>

          <div className="mt-5 flex items-center justify-between pb-4">
            <Button variant="text">Add</Button>

            <Button variant="outlined">cancel</Button>
          </div>
        </div>
      </form> */
}
