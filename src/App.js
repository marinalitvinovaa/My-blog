import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container, Pagination } from '@mui/material';
import PostList from './components/PostList/post-list';
import { postData } from './posts';
import api from './utils/api'



const test = api.getPostsAll();
console.log(test);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getPostsAll()    
      .then((data) => {
        setPosts(data)

      })
       
  }, [])

  return (
    <>
      <Header/>
      <Container>
        <PostList posts={posts}/>
      </Container>
      <Footer />
    </>
  );
}

export default App;
