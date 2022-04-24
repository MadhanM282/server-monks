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
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router";
import { ClubAction } from "../../Redux/Rtc/actions";

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

const storing = (event) => {
  //clubDetails/:id
  localStorage.setItem("mainId", event);
};
export const ClubCard = ({ event }) => {
  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  let z = event;
  let date = event.createdAt.split("T");
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: 0,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "#4d4c4c" }} src={user.user_img} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={event.club_title}
        subheader={date[0]}
      />
      <CardMedia
        component="img"
        height="194"
        image={event.image}
        //  "https://thumbs.dreamstime.com/b/kids-play-football…king-ball-running-child-team-jersey-120383202.jpg"
        // {event.image}
        alt={event.club_title}
      />

      <CardActions disableSpacing>
        <Button
          sx={[
            {
              boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
              m: 1,
              color: "#ffffff",
              bgcolor: "#222222",
            },
            () => ({ "&:hover": { color: "#fafafa", bgcolor: "#474747" } }),
          ]}
          //   sx={{ color: "#ff0077" }}
          onClick={() => {
            dispatch(ClubAction(event));
            storing(z);
            navigate(`/clubDetails/${event._id}`);
          }}
        >
          View More
        </Button>
      </CardActions>
    </Card>
  );
};
