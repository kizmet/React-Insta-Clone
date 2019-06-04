import React, { Component } from 'react';
import './PostContainer.css';
import Posts from 'components/Posts/Posts';

const PostContainer = (props) => {
    const dummyData = props.dummyData;
    const posts = dummyData.map((post) =>
    <Posts key={post.id}
    imageUrl={post.imageUrl}
    thumbnailUrl={post.thumbnailUrl}
    username={post.username}
    comments={post.comments}
    likes={post.likes}
    />

    );
    return (
        
        <ul className="content">
            {posts}
        </ul>
    )
}



export default PostContainer;