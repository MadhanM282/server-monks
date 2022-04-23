import { useState } from 'react';
import './club.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { clubListData } from '../../Redux/Home/clubHomeAction';



export const Club = () => {
  const { user } = useSelector((store) => store.auth),dispatch=useDispatch();
  const navigate=useNavigate();
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
    // console.log(e, e.target.value);
    const { id, value } = e.target;
    changeData({...clubData,[id]: value });
  

  }
  const submitData = (e) => {
    e.preventDefault();
    // dispatch(clubListData(clubData,navigate))
    console.log("The data is",clubData);

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
      <div id='contain'>
        <form action="" onSubmit={submitData}>
          <label htmlFor="">Title</label> <br />
          <input type="text" placeholder='Enter the title...' id='club_title' required
            onChange={handleChange} /> <br />
          <label htmlFor="">Select image</label>
          <input type="file" placeholder='choose image....' id='image' required
            accept='image/*' onChange={handleChange} /> <br />
          <label htmlFor="">Type</label>
          <select name="" id="type" onChange={handleChange}>
            {options.map((e) => (
              <option value={e.value} key={e.id} id='type'>{e.label}</option>
            ))}
          </select> <br />
          <label htmlFor="">Description</label>
          <textarea name="" id="description" cols="30" rows="10"
            placeholder='Enter the description...'
            onChange={handleChange}
          ></textarea> <br />
          <button>Create Club</button>
        </form>

      </div>

    </>

  )
};
