import React, { Component } from 'react';
import './Posts.css'
import CommentSection from 'components/CommentSection/CommentSection'
import {PostActions} from './PostActions';

const Posts = (props) => {
    const post_comments = props.comments;
    return (
        <li className="li_wrapper">
            <div className="title">
                <img src={props.thumbnailUrl} alt=""/> 
            <span id="post_username">{props.username}</span>
            </div>
            <div className="postImage">
                <img src={props.imageUrl} alt=""/>
            </div>   
            <PostActions />
            <div className="likes_total">
                {props.likes} likes
            </div>

            <div className="comment_component">
                {post_comments.map((comment) => 
                <CommentSection
                    key={comment.id}
                    text={comment.text}
                        username={comment.username}
                    
                     />
                )}
            </div>

        </li>
    )
}

export default Posts;