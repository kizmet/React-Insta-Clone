import React, { Component } from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    return (
        <div className="comment_wrapper">
            <span id="comment_user"> {props.username}</span>
            <span>{props.text}</span>
        </div>
    )
}

export default CommentSection;