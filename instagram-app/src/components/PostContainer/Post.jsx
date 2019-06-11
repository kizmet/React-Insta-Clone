import React, { Component } from 'react';
import './Post.css'
import CommentSection from '../CommentSection/CommentSection'
import {PostActions} from './PostActions';
import styled from 'styled-components';

const ListItem = styled.li`
    width: 100%;
    padding: 0%;
    background: white;
    border: .1rem solid #e6e6e6;
    border-radius: .3rem;
    margin: 0;
    margin-bottom: 6rem;
`;

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
        <ListItem>
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
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />                


        </ListItem>
    )}
}

export default Posts;