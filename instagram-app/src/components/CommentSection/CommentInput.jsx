import React, { Component } from 'react';
import './CommentInput.css';

const CommentInput = (props) => {
        return (
            <div className="comment_input_component">
                <form
                    className="comment_form"
                    onSubmit={props.submitComment}
                >
                    <label
                    className="label_textarea"
                    autosize= "false"
                    placeholder="Add a comment…"
                    >
                        
                    <textarea name=""
                            id=""
                            className="comment_text"
                            placeholder="Add a comment..."
                            value={props.comment}
                            onChange={props.changeComment}
                        />
                    </label>
                    <button
                        className="submit_button"
                        type="submit"
                        value="Post"
                    >
                    Post
                    </button>

                </form>

            </div>
        )
    
}

export default CommentInput;

