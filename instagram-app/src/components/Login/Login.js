import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleLoginSubmit = e => {
		const user = this.state.username;
		localStorage.setItem('user', user);
		window.location.reload();
	};



	componentWillUnmount() {
		this.login();
	}

	login = () => {
		localStorage.setItem(
			'username',
			JSON.stringify(this.state.username)
		)
	}

	render() {
		return (
			<section>
				<article>
					<div className="login_wrapper">
						<div className="login_component">
							<h1></h1>
							<div className="login_inputs">
								<form onSubmit={this.handleLoginSubmit} >
								<div className="username_component">
									<label className="username_label">Phone number, username or email</label>
									<input autocapitalize="off" 
									type="text" 
									value={this.state.username} 
									onChange={this.handleInputChange}
									maxlength="75" 
									/>
								</div>
								<div className="password_component">
									<label className="password_label">Password</label>
									<input autocapitalize="off" 
									type="text" 
									value={this.state.password}
									onChange={this.handleInputChange}
									maxlength="75" 
									/>
								</div>
								</form>
						</div>
					</div>
					</div>
				</article>
		</section>
	)
	}
}


export default Login;