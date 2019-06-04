import React, { Component } from 'react';
import './PostContainer.css';
import Posts from 'components/Posts/Posts';

const isText = searchText => {
    return isNaN(searchText.length);
}

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const searchText = this.props.searchText;
        const posts = [];
        let lastPost = null;
        this.props.dummyData.forEach((post) => {
            if (post.username.indexOf(searchText) === -1) {
                return;
            }
            if (post.id !== lastPost) {
                posts.push(
                    <Posts key={post.id}
                        imageUrl={post.imageUrl}
                        thumbnailUrl={post.thumbnailUrl}
                        username={post.username}
                        comments={post.comments}
                        likes={post.likes}
                    />
                );
            }
            lastPost = post.id;
        });

        return (
            <div className="post_container">
                <ul className="content">
                    {posts}
                </ul>
            </div>
        );
    }
}



export default PostContainer;

