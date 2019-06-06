import React, { Component } from 'react';
import './Post.css'
import CommentSection from '../CommentSection/CommentSection'
import {PostActions} from './PostActions';
import CommentInput from '../CommentSection/CommentInput';



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };


    render () {
    return (
        <li className="li_wrapper">
            <div className="title">
                <img src={this.props.post.thumbnailUrl} alt=""/> 
                <span id="post_username">{this.props.post.username}</span>
            </div>
            <div className="postImage">
                <img src={this.props.post.imageUrl} alt=""/>
            </div>   
            <PostActions 
            incrementLike={this.incrementLike}
            />
            <div className="likes_total">
                {this.state.likes} likes
            </div>

            {/* <div className="comment_component"> */}
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />                
            {/* </div> */}


        </li>
    )}
}

export default Posts;