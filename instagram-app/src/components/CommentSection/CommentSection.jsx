
import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './CommentSection.css';
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
            <div className="comment_component">
                <div className="comments">
                {this.state.comments.map((c, i) =>
                    <Comment key={i} comment={c}
                    />
                )}
                </div>
                <div className="comment_input">
                <CommentInput
                    comment={this.state.comment}
                    submitComment={this.handleCommentSubmit}
                    changeComment={this.commentHandler}
                />
                </div>
            </div>
        );
    }
}


export default CommentSection;
