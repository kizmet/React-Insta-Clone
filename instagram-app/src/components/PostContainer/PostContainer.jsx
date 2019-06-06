import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';



const PostContainer = (props) => {
    // constructor(props) {
    //     super(props);
    // }
    // render() {
    //     //const searchText = this.props.searchText;
    //     //const dummyData = this.props.dummyData;
    //     const theposts = [];
    //     let lastPost = null;
    //     this.props.posts.forEach((post) => {
    //         if (post.username.indexOf(this.props.searchText) === -1) {
    //             return;
    //         }
    //         if (post.imageUrl !== lastPost) {
    //             theposts.push(
    //                 <Posts 
    //                 key={post.imageUrl}
    //                 post={post}
    //                 //comments={post.comments}

    //                 />
    //             );
    //         }
    //         lastPost = post.imageUrl;
    //     });
// const searchText = props.searchText;
        // props.posts.forEach((post) => {
        //     if (post.username.indexOf(props.searchText) === -1) {
        //         return;
        //     }
        // }
        return (
            <div className="post_container">
                <ul className="content">
                    
                    {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
                </ul>
            </div>
        );
    }


export default PostContainer;

