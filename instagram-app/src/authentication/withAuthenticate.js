import React, { Component } from 'react';
import PostPage from '../components/PostContainer/PostPage';
import Login from '../components/Login/Login';

const withAuthenticate = PostPage => Login =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }


    componentDidMount() {
      if (!localStorage.getItem('username')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) 
        return <PostPage /> ; return <Login />;

    }
  }



export default withAuthenticate;
