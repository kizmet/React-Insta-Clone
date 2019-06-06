import React, {Component} from 'react';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';

const withAuthenticate = PostPage => Login => 
    class extends Component {
	constructor(props) {
	super(props);
	this.state = {
	loggedIn : false
	}
  }
	componentDidMount () {
	if (localStorage.getItem('loggedIn') === true) {
	this.setState({
	username: JSON.parse(localStorage.getitem(this.props.username))
	}); 
	}
  }
      UserLoggedIn = () => {!this.state.loggedIn ? <PostPage /> : <Login /> }
      render () {
        
	return (
	
    <UserLoggedIn />
)
    }
  }



export default withAuthenticate;
