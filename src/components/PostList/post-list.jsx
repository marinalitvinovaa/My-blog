import {Grid} from '@mui/material';
import Post from '../Post/Post';

import s from './index.module.css';



function PostList({posts}) {
  return (
    <Grid container spacing={2} style={{marginTop: '50px', marginBottom: '50px'}}>
     {posts.map(item => <Post key={item._id} {...item} />
     )}
    </Grid>
  );
}

export default PostList;
