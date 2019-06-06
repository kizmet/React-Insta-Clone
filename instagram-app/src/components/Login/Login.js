import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
		}
	}

	componentDidMount() {

		if (localStorage.getItem(this.state.username)) {
			this.setState({
				username: JSON.parse(localStorage.getItem(this.state.username))
			})
		} else {
			this.login()
		}
	}

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
							<h1>Instagram</h1>
							<div className="login_inputs">
								<form onSubmit={this.Login(this.value)} >
								<div className="username_component">
									<label className="username_label">Phone number, username or email</label>
									<input autocapitalize="off" type="text" value="username" maxlength="75" />
								</div>
								<div className="password_component">
									<label className="password_label">Password</label>
									<input autocapitalize="off" type="text" value="password" maxlength="75" />
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