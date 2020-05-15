import React, { Component } from 'react';
import Form from './formComponent';

class FormContainer extends Component {
	constructor() {
		super();
		this.state = {
			firstName: '',
			lastName: '',
			gender: '',
			age: '',
			location: '',
			passangers: '',
			dietary: []
		};
		this.handleChance = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { name, value, type, checked } = event.target;
		type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
	}
	render() {
		return (
			<div>
				<Form handleChange={this.handleChange} data={this.state} />
			</div>
		);
	}
}

export default FormContainer;
