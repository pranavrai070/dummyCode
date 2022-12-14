import { FETCH_ALL, CREATE, UPDATE, DELETE,TOGGLE_TODO,} from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case TOGGLE_TODO:
      return posts.map((post) => (post._id === action.payload._id ? {...post,done:!post.done}:post));
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

