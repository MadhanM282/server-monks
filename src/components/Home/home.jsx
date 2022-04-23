import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClubData } from "../../Redux/Home/clubHomeAction";
import { EventCard } from "../Card/Card";
import * as React from 'react';
import Box from '@mui/material/Box';


export const Home = () => {


  const dispatch = useDispatch();


  const { clubList, loding, error } = useSelector((store) => store.club);
  console.log('clubList', clubList);


  const [page, setPage] = useState(1);


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


  const handleChangeType = (e, value) => {
    setFilter(value);
  }

  const handleChangeSort = (e) => {
    if (e.target.value === "asc") {
      setSort("asc")
    }
    if (e.target.value === "desc") {
      setSort("desc")
    }
  }

  // return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (

  return (

    <Box sx={{mt:20,bgcolor:"transparent"}}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          // border: "1px solid"
        }}
      >
        {clubList.clubs && clubList.clubs.map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
      </div>
    </Box>
  )
};
