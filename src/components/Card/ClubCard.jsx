import * as React from 'react';
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
import { useSelector,useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router';
import { Club } from '../../Redux/Rtc/actions';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const ClubCard =({event}) => {

    const { user } = useSelector((store) => store.auth);

    const navigate = useNavigate()


    const dispatch = useDispatch()




    

    let date = event.createdAt.split("T")
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} alt={user.user.firstName} src={user.user_img} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={event.club_title}
                subheader={date[0]}
            />
            <CardMedia
                component="img"
                height="194"
                image={event.image}
                alt={event.club_title}
            />
            
            <CardActions disableSpacing>
                <Button onClick={()=>{
                    dispatch(Club(event))
                    navigate(`/clubDetails`)
                }} >View More</Button>
                
            </CardActions>
        </Card>
    );
}
