import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import ResponsiveAppBar from "../Navbar/Navbar";

export const CardDetails = () => {
    const { Club, user } = useSelector((store) => store.Rtc);
    const { firstName } = useSelector((store) => store.auth.user.user);

    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{mt:15}}>
            <h1>Details of Club</h1>
            </Box>
                
            <Box sx={{display: 'flex',width:"70%",border:0,ml:25,mt:4,p:4,justifyContent: 'center',gap:"100px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
                <Box sx={{ border:0,width:"50%",borderRadius: 3 }}><img style={{width:"100%", borderRadius: 9 }}src={ Club.image}/></Box>
                <Box sx={{
                    border: 0, width: "50%", borderRadius: 3 ,pl: 4, boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
                }}>
                    <h1>{Club.club_title}</h1>
                    <Typography sx={{height:"auto",mt:4}} variant="body2" color="text.secondary">
                        {Club.description}
                    </Typography>
                    <Box sx={{ mt: 3}}>

                    <Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Subscribe</Button>      
                    </Box>
 
                    <Box sx={{ mt: 3 }}>Members-{Club.subcription_user_id.length}</Box>
                    <Box sx={{ mt: 3 }}>Creator-{firstName}</Box>

            </Box>
        </Box>
        </>
    )


}