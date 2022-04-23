import { useState } from 'react';
import './club.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { clubListData } from '../../Redux/Home/clubHomeAction';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, Box, InputLabel, Select, MenuItem } from '@mui/material';
import { width } from '@mui/system';




export const Club = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user);
  const [clubData, changeData] = useState({
    club_title: "",
    image: "",
    type: "",
    description: "",
    creator_id: user._id

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




      
    </>

  )
};
