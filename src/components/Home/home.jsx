import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from "../../Redux/actions";
import { EventCard } from "../Card/Card";
import ResponsiveAppBar from "../Navbar/Navbar";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://server-monks-backend.herokuapp.com/clubs")
      .then((res) => {
        dispatch(setEvents(res.data));
      });
  };
  const data = useSelector((store) => store.setAllEvents.allEvents);

  return (
    <div style={{ backgroundColor: "#AB46D2" }}>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <br />
      {!data ? (
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
          {data.map((event) => {
            return <EventCard key={event._id} event={event} />;
          })}
        </div>
      )}
    </div>
  );
};
