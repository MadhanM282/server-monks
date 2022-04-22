import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClubData } from "../../Redux/Home/clubHomeAction";
import { EventCard } from "../Card/Card";
import ResponsiveAppBar from "../Navbar/Navbar";


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

  return (
    <div style={{ backgroundColor: "#AB46D2" }}>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <br />
      {!clubList.clubs ? (
        <div>...Loading</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {clubList.clubs && clubList.clubs.map((event) => {
            return <EventCard key={event._id} event={event} />;
          })}
        </div>
      )}
    </div>
  );
};
