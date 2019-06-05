import React, { Component } from 'react';
import './Posts.css'
import CommentSection from 'components/CommentSection/CommentSection'
import {PostActions} from './PostActions';
import CommentInput from './CommentInput';

class Posts extends Component {
    constructor(props) {
        super(props);
    }
    render () {
    const post_comments = this.comments;
    return (
        <li className="li_wrapper">
            <div className="title">
                <img src={this.props.thumbnailUrl} alt=""/> 
            <span id="post_username">{this.props.username}</span>
            </div>
            <div className="postImage">
                <img src={this.props.imageUrl} alt=""/>
            </div>   
            <PostActions />
            <div className="likes_total">
                {this.props.likes} likes
            </div>

            <div className="comment_component">
                {this.props.comments.map((comment) => 
                <CommentSection
                    key={comment.id}
                    text={comment.text}
                        username={comment.username}
                     />
                )}
            </div>
            <div className="comment_input">
                <CommentInput 
                onChange={this.props.handleChange}
                    onSubmit={this.props.handleSubmit}
                />
            </div>

        </li>
    )}
}

export default Posts;