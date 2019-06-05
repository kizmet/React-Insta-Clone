import React, { Component } from 'react';
import './CommentInput.css';

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(e) {
        this.props.onChange(e.target.value);
    }
    handleOnSubmit(e) {
        this.props.onSubmit(e);
        e.preventDefault();
    }
    render() {
        const text = this.props.text;
        return (
            <div className="comment_input_component">
                <form action="" method="POST" className="comment_form" onSubmit={this.handleOnSubmit}>
                    <textarea name="" 
                    id="" 
                    className ="comment_text" 
                    placeholder="Add a comment..."
                    value={text}
                    onChange={this.handleOnChange}
                    />
                    <button className="Submit_button" type="submit">Post</button>
                </form>

            </div>
        )
    }
}

export default CommentInput;