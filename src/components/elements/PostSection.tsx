import React, {useState, useEffect} from 'react';
import { Post } from '../cards/Post';

export const PostSection = () => {

    const [posts, postQuery] = useState();

    useEffect(() => {

        async function fetchPosts() {

            let response = await fetch(process.env.REACT_APP_API_URL + '/posts');

            response = await response.json();

            postQuery(response);
        }

        fetchPosts();
    }, []);

    // If there is a response
    if( posts !== undefined ) {

        {posts.map((post, index) => {

        // console.log('here');

            return (
                <Post item={post} key={index} />
            );
        })}
    }

    return null;
}
