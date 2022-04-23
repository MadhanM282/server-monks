import { useState } from 'react';
import './club.css';
import { useNavigate } from 'react-router';



export const Club = () => {
  const [clubData,changeData]=useState({
    club_title:"",
    image:"",
    type:"",
    description:"",
    creator_id:""

  })
 

  const handleChange = (e) => {
    // console.log(title, desc, cat);
    // alert("Data added succesfully");
    // navigate('/');

  }
  const submitData=(e)=>{
    e.preventDefault();

  }

  const options = [
    {
      value: "grouping",
      label: "Grouping"
    },
    {
      value: "dressing",
      label: "Dressing"
    },
    {
      value: "inspiration",
      label: "Inspiration"
    },
    {
      value: "games",
      label: "Games"
    },
    {
      value: 'exam',
      label: 'Exam'
    },
    {
      value: "study_rooms",
      label: "Study_rooms"
    },
    {
      value: "coding",
      label: "Coding"
    }
  ]

  return (
    <>
      <div id='contain'>
        <form action="" onSubmit={submitData}>
          <input type="text" placeholder='Enter the title...' id='club_title' 
          onChange={handleChange}/>

         
        </form>

      </div>

    </>

  )
};
