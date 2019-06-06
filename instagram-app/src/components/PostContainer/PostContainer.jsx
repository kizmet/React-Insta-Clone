import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';



const PostContainer = (props) => {
        return (
            <div className="post_container">
                <ul className="content">
                    
                    {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
                </ul>
            </div>
        );
    }


export default PostContainer;

