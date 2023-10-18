import axios from 'axios';

const url ='https://memories-8p2n.onrender.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost );