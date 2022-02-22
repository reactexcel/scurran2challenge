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
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

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

  React.useEffect(() => {
    dispatch(HotelListRequest());
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(hotelsList, "=================1221");
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
        <Button variant="contained">Add Hotel</Button>
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
                //   height="200"
                image={val.hotel_image}
                alt="Paella dish"
                //   minHeight="200"
              />
              <CardHeader
                //   avatar={
                //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //       R
                //     </Avatar>
                //   }
                //   action={
                //     <IconButton aria-label="settings">
                //       <MoreVertIcon />
                //     </IconButton>
                //   }
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
                {/* <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography> */}
              </CardContent>
              {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions> */}
              {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse> */}
          
            <Link to= {`/edit/${val?.id}`}>
            <Button variant="contained"  >
            <span>Edit</span>
              <EditIcon />
              </Button>
        </Link>
            
           
        
           
            </Card>
          </Grid>

        );
      })}
    </Grid>
  );
}
