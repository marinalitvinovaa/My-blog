import React from 'react';
import {useState} from 'react';
import {Card, Grid, CardHeader, Avatar, IconButton, CardMedia, Typography, CardContent, CardActions, Collapse} from '@mui/material';
import { red } from '@mui/material/colors';
import {MoreVert, Favorite, ExpandMore} from '@mui/icons-material';
import  {styled} from '@mui/material/styles';
import dayjs from 'dayjs';

import s from './index.module.css';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';


dayjs.locale('ru')
dayjs.extend(relativeTime)

const ExpandMoreStyled = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));



function Post({image, title, author = {}, text, created_at}) {
  const {email, avatar} = author;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
     <Grid sx={{display: 'flex'}} item xs={12} xm={6} md={4} lg={3}>
       <Card sx={{ maxWidth: 345 }} className={s.card}>
       <CardHeader
        avatar={
          <Avatar src={avatar && avatar} sx={{ bgcolor: red[500] }} aria-label="recipe">
            {email?.slice(0, 1).toUpperCase()} 
          </Avatar>
        }
        
        title={author?.about}
        subheader={dayjs(created_at).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={`Изображение ${title}`}
      />
      <CardContent>
        <Typography variant='h5' component='h2' gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{marginTop: 'auto'}} disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ExpandMoreStyled
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore/>
        </ExpandMoreStyled>
      </CardActions>
     
       <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {text}
          </Typography>
        </CardContent>
      </Collapse>  
      </Card>
     </Grid>

    </>
  );
}

export default Post;
