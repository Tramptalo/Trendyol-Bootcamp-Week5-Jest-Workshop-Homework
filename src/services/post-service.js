import { getAllPosts } from '../services/post-provider';

export const getUserPostedMost = async() => {
  const posts = await getAllPosts();
  const users = {};

  for (const post of posts) {
    if(!users[post.userId]) {
      users[post.userId] = []; 
    }

    users[post.userId].push(post.title);
  }
  
  let result = [];

  for (const titles of Object.values(users)) {
    if(titles.length >= result.length) {
      result = titles;
    }
  }

  return result;
}

getUserPostedMost();