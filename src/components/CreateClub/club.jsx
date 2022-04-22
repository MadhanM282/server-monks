import { useState } from 'react';
import './club.css';


export const Club = () => {
  const [title, changeTitle] = useState("");
  const [desc, changDesc] = useState('');
  const [cat,changeCat]=useState('');
  
  const handleChange = (e) => {
    console.log(title,desc,cat);

  }
  const options = [
    {
      value: 'teacher',
      label: "Teacher"
    },
    {
      value: 'managment',
      label: "Managment"
    },
    {
      value:'fess',
      label:'Fees'
    },
    {
      value:'holiday',
      label:'Holiday'
    },
    {
      value:'exam',
      label:'Exam'
    },
    {
      value:'hostel',
      label:'Hostel'
    },
    {
      value:'sports',
      label:'Sports'
    },
    {
      value:'mess',
      label:'Mess'
    },
  ]

  return (
    <>
      <div id='contain'>
        <label htmlFor="">Title</label><br />
        <input type="text" placeholder='Enter the title....' value={title}
          onChange={(e) => changeTitle(e.target.value)} /> <br /> <br />
        <label htmlFor="">Category</label> <br />
       <select name="" id="" value="Bhava" onChange={(e)=>changeCat(e.target.value)}>
         {options.map((option)=>(
           <option value={option.value}>{option.label}</option>

         ))}
       </select>
       <br /> <br />
        <label htmlFor="">Description</label><br />
        <textarea name="" id="" cols="42" rows="10"
          onChange={(e) => changDesc(e.target.value)} placeholder='Enter the description...'>

        </textarea><br />

        <button onClick={handleChange}>Create Club</button>

      </div>

    </>

  )
};
