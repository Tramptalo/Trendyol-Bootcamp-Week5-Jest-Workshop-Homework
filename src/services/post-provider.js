import axios from 'axios';

export const getAllPosts = async() => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data || [];

    }catch(ex){
        return [];
    }
}