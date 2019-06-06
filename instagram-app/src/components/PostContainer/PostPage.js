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
            filteredPosts: []
        };
    }


    componentDidMount() {
        this.setState({ posts: dummyData });

    }
    searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
            if (p.username.includes(e.target.value)) {
                return p;
            }
        });
        this.setState({ filteredPosts: posts });
    };



    render() {
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
                        posts={
                            this.state.filteredPosts.length > 0
                                ? this.state.filteredPosts
                                : this.state.posts
                        }
                    />
                </main>

            </section>

        );
    }
}

export default App;
