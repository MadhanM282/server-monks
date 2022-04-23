import axios from "axios";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";


export const MYCLUBS = ()=>{

    const { user } = useSelector((store) => store.auth)
    console.log('user', user);
    const dispatch = useDispatch();

    // useEffect(()=>{
    //     axios.get(`https://server-monks-backend.herokuapp.com/club/${user._id}`).then(({data})=>{
    //         // console.log('data', data);
    //     })
    // },[])
    return(
        <div>Cluns</div>
    )
}