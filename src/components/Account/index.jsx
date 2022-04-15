import React, { useState, useEffect } from 'react';
import { loadUser, loadProfile } from '../../store/userSlice/userSlice';
import { useDispatch, useSelector } from 'react-redux'; 
import { selectUsername, selectUserId } from '../../store/authSlice/authSlice'
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
function Account({ authenticated }) {
    const dispatch = useDispatch();
    const selectedUserId = useSelector(selectUserId)
    const selectedUsername = useSelector(selectUsername);
  const getUser = loadUser();
    const getProfile = loadProfile();
    const [currUser, setCurrUser] = useState();
    const [userProfile, setUserProfile] = useState();
    const [expanded, setExpanded] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  

  const setUser = async (dispatch) => {
    
    let authUser
    try {
      await dispatch(getUser.pending());
    
      authUser = await dispatch(getUser.fulfilled(selectUsername))
     return setCurrUser(authUser)
    } catch (err) {
      dispatch(getUser.rejected())
    }
  }

  const setProfile = async (dispatch) => {
    
    let authProfile
    try {
      await dispatch(getProfile.pending());
    
      authProfile = await dispatch(getProfile.fulfilled(currUser.id))
     return setUserProfile(authProfile)
    } catch (err) {
      dispatch(getProfile.rejected())
    }
  }

  useEffect(() => {
    
      setUser(dispatch)
      setProfile(dispatch)
    
  }, [dispatch,setUser, setProfile])
  

    
console.log(userProfile, currUser)
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <Card authUser={currUser} authProfile={userProfile} authenticated={isAuthenticated} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        username={userProfile.firstName + userProfile.lastName}
        memberSince={currUser.createdAt}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
                    UserName: {currUser.username}
                    DOB:{userProfile.DOB}
                    Email:{userProfile.email}
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Account