import { useState } from 'react';
import './club.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { clubListData } from '../../Redux/Home/clubHomeAction';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Box, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { width } from '@mui/system';
import ResponsiveAppBar from '../Navbar/Navbar';




export const Club = () => {
  const { user } = useSelector((store) => store.auth), dispatch = useDispatch();
  console.log('user', user);
  const navigate = useNavigate();
  // console.log(user);
  const [clubData, changeData] = useState({
    club_title: "",
    image: "",
    type: "",
    description: "",
    creator_id: user.user._id

  })
  console.log(clubData);

  const handleChange = (e) => {
    // console.log(title, desc, cat);
    // alert("Data added succesfully");
    // navigate('/');
    console.log(e, e.target.value);
    const { id, value } = e.target;
    changeData({ ...clubData, [id]: value });

  }
  const submitData = (e) => {
    e.preventDefault();
    dispatch(clubListData(clubData, toast, navigate))
    console.log("The data is", clubData);

  }

  const options = [
    {
      value: "grouping",
      label: "Grouping",
      id: nanoid()
    },
    {
      value: "dressing",
      label: "Dressing",
      id: nanoid()
    },
    {
      value: "inspiration",
      label: "Inspiration",
      id: nanoid()

    },
    {
      value: "games",
      label: "Games",
      id: nanoid()


    },
    {
      value: 'exam',
      label: 'Exam',
      id: nanoid()
    },
    {
      value: "study_rooms",
      label: "Study_rooms",
      id: nanoid()
    },
    {
      value: "coding",
      label: "Coding",
      id: nanoid()
    }
  ]

  return (
    <>
    <ResponsiveAppBar/>
      <Box sx={{ m: "auto",mt:"100px", display: "flex", justifyContent: 'center',width:"60%",p:3 }} >

        <Box sx={{p:2,width:"90%"}}>
          <TextField  variant="outlined" sx={{mt:"10px", bgcolor: '#FFFFFF', borderRadius: "10px",width:"100%" }} id="club_title" label="Title" onChange={handleChange} /> <br />
          <TextField  variant="outlined" sx={{mt:"10px", bgcolor: '#FFFFFF', borderRadius: "10px",width:"100%" }} id="type" label="Type " onChange={handleChange} /><br />
          <TextField  variant="outlined" sx={{mt:"10px", bgcolor: '#FFFFFF', borderRadius: "10px",width:"100%" }} id="description" label="Description" onChange={handleChange} /><br />
          <TextField  variant="outlined" sx={{mt:"10px", bgcolor: '#FFFFFF', borderRadius: "10px",width:"100%" }} id="image" label="Image URL" onChange={handleChange} /><br />
          <Button onClick={(e)=>{
            submitData(e)
          }} sx={[{ boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)", m: 1, color: "#ffffff",bgcolor:"#222222",ml:"40%" }, () => ({ '&:hover': { color: '#fafafa',bgcolor:"#474747" } })]} >Add Club</Button>
        </Box>

      </Box>
    </>

  )
};
