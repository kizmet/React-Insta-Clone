import React, { Component } from 'react';
import '../../App.css';
import dummyData from '../../dummy-data'
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';


class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            //searchText: '',
            filteredPosts: []
            //commentText: ''
        };
        //this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.setState({ posts: dummyData });
        //   localStorage.setItem('dummyDataSaved', JSON.stringify(dummyData));
        //   let savedData = localStorage.getItem('dummyDataSaved');
        //   try {
        //     savedData = JSON.parse(savedData);
        //     this.setState({ dummyData: savedData});
        //   } catch (err) {
        //     console.log('error');
        //   }
    }
    searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
            if (p.username.includes(e.target.value)) {
                return p;
            }
        });
        this.setState({ filteredPosts: posts });
    };
    // handleSearchTextChange(searchText) {   
    //   this.setState({
    //     searchText: searchText
    //   });
    // }

    // handleSubmit(e) {
    //   e.preventDefault();
    //   if (!this.state.commentText.length) {
    //     return;
    //   }
    //   const newcommentText = {
    //     text: this.state.commentText,
    //     username: 'bryant',  //this.state.username,
    //     id: Date.now()
    //   };
    //   this.setState(state => ({
    //     dummyData: state.items.concat(newcommentText),
    //     text: ''
    //   }));
    // }

    // handleChange(text) {
    //   this.setState(state => ({
    //     commentText: text
    //   }));
    // }


    render() {
        //const { commentText } = this.state.commentText;
        //const searchText = this.state.searchText;
        return (

            <section className="App">
                <nav>
                    <SearchBar
                        searchText={this.state.searchText}
                        searchPosts={this.searchPostsHandler}
                    />
                </nav>
                <main>
                    <PostContainer
                        //posts={this.state.posts} 
                        //searchText={this.state.searchText}
                        posts={
                            this.state.filteredPosts.length > 0
                                ? this.state.filteredPosts
                                : this.state.posts
                        }

                    //          posts = {this.state.posts.forEach((post) => {
                    //            if (post.username.indexOf(this.searchText) === -1) {
                    //                return;
                    //    }})
                    //          }
                    //text={commentText}
                    //onSubmit={this.handleSubmit}
                    //onChange={this.handleChange}
                    />
                </main>

            </section>

        );
    }
}

export default App;
