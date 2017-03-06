import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
	static propTypes = {
		id: PropTypes.number.isRequired,
		valueOfSquare: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	render() {
		return (
			<div className="square" id={this.props.id} onClick={this.handleClick}>
				<span className="icon">{this.props.valueOfSquare}</span>
			</div>
		);
	}

	handleClick = () => {
		this.props.onClick(this.props.id, this.props.valueOfSquare);
	};
}
