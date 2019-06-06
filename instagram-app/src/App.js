import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';

class App extends Component {
  constructor () {
    super();
    this.state = {};
  }


  render () {
  return (
    
    <ComponentFromWithAuthentication />
    
  );}
}
const ComponentFromWithAuthentication = withAuthenticate(PostPage)(Login);

export default App;
