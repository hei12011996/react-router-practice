import React, { Component } from 'react';


export default class AboutPage extends Component {
	onClick = () => {
		const {history} = this.props
		history.go(-1)
	}

	render() {
		return (
			<div>
				asdasdadqweqweqwoidasndiowansdoiawndiuqwbhfoiwandkl
				<button onClick={this.onClick}> Go Back </button>
			</div>
		);
	}
}