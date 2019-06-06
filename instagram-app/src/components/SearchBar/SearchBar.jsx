import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    // }
    // handleSearchTextChange(e) {
    //     this.props.onSearchTextChange(e.target.value)
    // }
    // render () {
        return (
            <div className="search_bar_wrapper">
                <div className="search_bar_component">
                    <div className="search_bar_logo">
                        <span id="ig"></span>
                        <div className="bar"></div>
                        <span id="instagram"></span>
                    </div>
                    <div className="search_bar_input">
                         <input 
                         className="input_text" 
                         type="text" 
                         name="" 
                         id="" 
                         placeholder="Search" 
                            //onChange={props.searchText}
                            onKeyDown={props.searchPosts}   
                         />
                    </div>
                    <div className="search_bar_profile">
                        <span id="explore"></span>
                        <span id="activity"></span>
                        <span id="profile"></span>

                    </div>
                </div>
            </div>
        )
    }


export default SearchBar;