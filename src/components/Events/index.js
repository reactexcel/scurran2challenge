import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HotelEventRequest } from "../../redux/actions";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HotelEvent = () => {
  const dispatch = useDispatch();
  const hotelEventList = useSelector((state) => state.hotelEventsStatus);
  const { id } = useParams();

  useEffect(() => {
    dispatch(HotelEventRequest({ id }));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Typography element="div" variant="h6">
        Hotel Events :
      </Typography>
      {hotelEventList?.hotelEvents?.map((val) => {
        return (
          <Box sx={{ width: "40%", boxShadow: 2, marginTop: 5 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <React.Fragment>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Hotel id : {val.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {val.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Rs.{val.price}
                    </Typography>
                    <Typography variant="body2">
                      Booking Limit : {val.limit}
                      {/* <br />
                  {'"a benevolent smile"'} */}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
                </React.Fragment>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
};

export default HotelEvent;
