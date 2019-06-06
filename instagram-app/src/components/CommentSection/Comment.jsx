import React from 'react';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className="comment_wrapper">
            <span id="comment_user"> {props.comment.username}</span>
            <span>{props.comment.text}</span>
        </div>
    );
};



export default Comment;
