import React, { Component } from 'react';
import './PostContainer.css';
import Post from './Post';
import styled from 'styled-components';

const Posts = styled.div`
    padding-top: 12rem;
    max-width: 93.5rem;    
    width: 100%;
    margin: 0 auto;    
    display: flex;
    flex-direction: column;

`;

const Content = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;    
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const PostContainer = (props) => {
        return (
            <Posts>
                <Content>
                    
                    {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
                </Content>
            </Posts>
        );
    }


export default PostContainer;

