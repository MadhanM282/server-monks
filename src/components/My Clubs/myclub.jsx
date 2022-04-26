import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveAppBar from "../Navbar/Navbar";

export const MYCLUBS = () => {
  const { user } = useSelector((store) => store.auth);
  const [data, SetData] = useState([]);
  // console.log("data", data);
  // console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`https://server-monks-backend.herokuapp.com/clubs/${id}`)
      .then(({ data }) => {
        // console.log("data", data);
        SetData(data);
      });
  }, []);

  return (
    <>
      {data ? (
        <Box>
          <ResponsiveAppBar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {data.map((ele) => {
              return (
                <Card
                  sx={{
                    maxWidth: "345px",
                    m: "auto",
                    mt: "150px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: 3,
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" />

                      // <Avatar alt="Remy Sharp" src="" />
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
                      </IconButton>
                    }
                    title={ele.club_title}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={ele.image}
                    alt={ele.club_title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {ele.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    disableSpacing
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  ></CardActions>
                </Card>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};
