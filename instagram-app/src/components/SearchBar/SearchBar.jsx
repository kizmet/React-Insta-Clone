import React, { Component } from 'react';
import './SearchBar.css';
import styled from 'styled-components';



const Flex = styled.div` 
    display: flex;
    flex-direction:  ${props => props.direction || "column"};
    align-items: center;
    justify-content: center;
    width: 100%;
    margin:0;
    padding:0;
    background: white;`;

const FlexNavWrapper = styled(Flex)`
    border-bottom: 1px solid rgba(0, 0, 0, .0975);
    height: 7.7rem;
    position: fixed;
    
`
const FlexNavComponent = styled(Flex)`
    max-width: 1010px;
    height: 7.7rem;
    padding: 2.6rem 2rem;
`;
const SearchBarLogo = styled.div`
    min-width: 4rem;
    display: flex;
    flex: 1 0 0;
`;

const SearchBar = (props) => {
        return (
            <FlexNavWrapper>
                <FlexNavComponent direction="row">
                    <SearchBarLogo>
                        <span id="ig"></span>
                        <div className="bar"></div>
                        <span id="instagram"></span>
                    </SearchBarLogo>
                    <div className="search_bar_input">
                         <input 
                         className="input_text" 
                         type="text" 
                         name="" 
                         id="" 
                         placeholder="Search" 
                            onKeyDown={props.searchPosts}   
                         />
                    </div>
                    <div className="search_bar_profile">
                        <span id="explore"></span>
                        <span id="activity"></span>
                        <span id="profile"></span>

                    </div>
                
            </FlexNavComponent>
            </FlexNavWrapper>
        )
    }


export default SearchBar;