import React from 'react';
import { useEffect } from 'react';
import {deletePost,getPosts} from '../../actions/posts';


import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from '../../constants/actionTypes';

import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import Post from './Post/Post';
import Tabs from '../Tabs/Tabs'
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  const dispatch = useDispatch();
  const currentTab = useSelector(state => state.currentTab);

  useEffect(() => {
    dispatch(getPosts());
},[]);
 
const getTodos = () => {
  if (currentTab === ALL_TODOS) {
      return posts;
  } else if (currentTab === ACTIVE_TODOS) {
      return posts.filter(todo => !todo.done)
  } else if (currentTab === DONE_TODOS) {
      return posts.filter(todo => todo.done)
  }
}

const removeDoneTodos = () => {
  posts.forEach(({ done, _id }) => {
      if (done) {
          dispatch(deletePost(_id));
      }
  })
}

const handleChange=(e)=>{
  console.log(e.target.value);
}

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <Tabs currentTab={currentTab} />
        <div className='calender'>
          <input
          type="date"
          onChange={handleChange}
          >
          </input>
        </div>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={12}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
