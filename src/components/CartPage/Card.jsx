// import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Box } from '@mui/system';
import ResponsiveAppBar from "../Navbar/Navbar"

export const CardDetails = () => {
    const { Club } = useSelector((store) => store.Rtc)
    console.log('Club', Club);
    return (
        <>
            <ResponsiveAppBar/>
            <Card sx={{ maxWidth: 345, m: "auto", mt: "150px" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} alt={Club.creator_id.firstName}  aria-label="recipe"/>
                            
                        
                        // <Avatar alt="Remy Sharp" src="" />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={Club.club_title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Club.image}
                    alt={Club.club_title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {Club.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Button >Subscribe</Button>
                    <Box>Members-{Club.subcription_user_id.length}</Box>
                </CardActions>
            </Card>
        </>
    )
}