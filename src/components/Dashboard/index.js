import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector, useDispatch } from "react-redux";
import { HotelListError, HotelListRequest } from "../../redux/actions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import DummyImage from "../../assets/image/dummyimage.jpg";
import Stack from "@mui/material/Stack";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const hotelsList = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(HotelListRequest());
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddNewHotel = () => {
    navigate("/addhotel");
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
      >
        <Typography variant="h5" component="div">
          Hotel List
        </Typography>
        <Button variant="contained" onClick={handleAddNewHotel}>
          Add Hotel
        </Button>
      </Grid>
      {hotelsList?.hotelListStatus?.hotelList?.result.map((val) => {
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
                alt={val.name}
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
              <Stack direction="row" spacing={8}>
                <div style={{ padding: 10 }}>
                  <Link to={`/edit/${val?.id}`}>
                    <Button variant="contained">
                      <span>Edit</span>
                      <EditIcon />
                    </Button>
                  </Link>
                </div>
                <div style={{ padding: 10 }}>
                  <Link to={`/event/${val?.id}`}>
                    <Button variant="outlined">Event</Button>
                  </Link>
                </div>
              </Stack>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
