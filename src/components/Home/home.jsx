import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClubData } from "../../Redux/Home/clubHomeAction";
import { EventCard } from "../Card/Card";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ClubCard } from "../Card/ClubCard";
import { Navigate, useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { clubList, loding, error } = useSelector((store) => store.club);

  const checking = useSelector((store) => store.club);
  console.log("checking", checking);

  const { isAuthenticated } = useSelector((store) => store.auth);

  const types = [
    "Education",
    "Gaming",
    "Exploration",
    "Adventure",
    "Coding",
    "Music",
    "Video",
    "Photography",
  ];

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // console.log('clubListxdcfvghbjn', clubList.clubs.length);

  const size = clubList.totalPages;
  console.log("size", size);

  // const types = clubList.clubs;

  const [page, setPage] = useState(1);
  console.log("page", page);

  const [sort, setSort] = useState("asc");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, [page, sort, filter]);

  const fetchData = () => {
    dispatch(getClubData(page, sort, filter));
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // const handleChangeType = (e, value) => {
  //   setFilter(e.target.value);
  // };

  const handleChangeSort = (e) => {
    if (e.target.value === "asc") {
      setSort("asc");
    }
    if (e.target.value === "desc") {
      setSort("desc");
    }
  };

  // return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (

  return (
    <Box sx={{ mt: 15 }}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          mb: 2,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px - 2px, rgba(0, 0, 0, 0.3) 0px 3px 7px - 3px",
        }}
      >
        <Box sx={{ width: "20%", ml: 5 }}>
          {/* <h1 >
             Clubs
          </h1> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, color: "white", display: { xs: "none", md: "flex" } }}
          >
            CLUBS :-
            {/* {clubList.clubs.length} */}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
            alignItems: "center",
          }}
        >
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
            value="asc"
            onClick={handleChangeSort}
            variant="text"
          >
            Old
          </Button>
          <Button
            sx={[
              {
                boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                m: 1,
                color: "#ffffff",
                bgcolor: "#242424",
              },
              () => ({ "&:hover": { color: "#fafafa", bgcolor: "#474747" } }),
            ]}
            value="desc"
            onClick={handleChangeSort}
            variant="text"
          >
            Latest
          </Button>
          
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              sx={[
                {
                  color: "#202020",
                },
                () => ({ "&:hover": { color: "#202020", bgcolor: "#474747" } }),
              ]}
              id="demo-simple-select-standard-label"
            >
              Filter by Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              label="Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {types &&
                types.map((e) => {
                  return (
                    <MenuItem
                      key={e}
                      // onClick={handleChangeType}
                      id={e}
                      value={e}
                    >
                      {e}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 7,
          width: "95%",
          m: 3,
          marginTop: "20px",
        }}
      >
        {clubList.clubs &&
          clubList.clubs.map((event) => {
            return <ClubCard key={event._id} event={event} />;
          })}
      </Box>
      <br />
      <br />
      <Box sx={{ width: "fit-content", margin: "auto" }}>
        <Stack spacing={4}>
          <Pagination count={size} page={page} onChange={handleChangePage} />
        </Stack>
      </Box>
      <br />
      <br />
    </Box>
  );
};
