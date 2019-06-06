import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './CommentSection.css';
import styled from 'styled-components';

const CommentComponent = styled.div`
    text-align: left;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: .8rem;
    `;

const Comments = styled.div`
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    margin-bottom: .8rem;
`;


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        } else {
            this.setComments();
        }
    }

    componenetWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };

    commentHandler = e => {
        this.setState({ comment: e.target.value });
    };

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: 'bryant' };
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        setTimeout(() => {
            this.setComments();
        }, 500);
    };

    render() {
        return (
            <CommentComponent>
                <Comments>
                {this.state.comments.map((c, i) =>
                    <Comment key={i} comment={c}
                    />
                )}
                </Comments>
                <div className="">
                <CommentInput
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler}
                />
                </div>
            </CommentComponent>
        );
    }
}


export default CommentSection;
