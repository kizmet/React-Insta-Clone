import React, { Component } from 'react';
//import {FormGroup, Form} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

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

	render() {
		return (
			<section>
				<article>
						<div className="login_component">
							<h1></h1>
							<div className="login_inputs">
							<Form 
								
								>
								<FormGroup>
										<Label 
										className="username_label" 
										autosize= "false"
										placeholder="Phone number, username or email"
									></Label>	
									<Input 
											type="text"
										name="username"
											autoCapitalize="off"		
											value={this.state.username}
											onChange={this.handleInputChange}
											maxLength="75"
											placeholder="Add a comment..."
											/>
									
								</FormGroup>	
								<FormGroup>
										<label 
										className="password_label" 
										placeholder="Password"
										autosize="false"
									></label>
									<Input 
									autoCapitalize="off"	
										type="password"
										name="password"
											value={this.state.password}
											onChange={this.handleInputChange}
										maxLength="75"
											/>
											

									<Button 
									type="submit"
									className="login_submit"
									value="submit"
										onSubmit={this.handleLoginSubmit}
									>
										Login</Button>
								</FormGroup>
							</Form>
							</div>
						</div>
					
				</article>
			</section>
		)
	}
}


export default Login;

