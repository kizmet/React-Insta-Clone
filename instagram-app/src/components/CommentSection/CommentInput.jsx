import React, { Component } from 'react';
import './CommentInput.css';
import styled from 'styled-components';

const CommentInputComp = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    min-height: 56px;
    justify-content: center;
    border-top: 1px solid #efefef;
    padding-left: 16px;
    padding-right: 16px;
    align-items: stretch;
    `;

const CommentInput = (props) => {
        return (
            <CommentInputComp>
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

            </CommentInputComp>
        )
    
}

export default CommentInput;

