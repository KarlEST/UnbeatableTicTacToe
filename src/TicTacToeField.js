import React, { Component } from 'react';
import PlayField from './PlayField';
import GameManager from './GameManager';

export default class TicTacToeField extends Component {

	constructor(props) {
		super(props);

		this.gameManager = new GameManager();
		this.state = {
			squares: this.gameManager.getInitialSquaresState(),
			winner: null,
		};
	}

	render() {
		return (
			<div className="tictactoefield">
				<PlayField squares={this.state.squares} onClick={this.handleClick} />
			</div>
		);
	}

	handleClick = (squareIndex) => {
		if (this.state.squares[squareIndex] !== 'X' && this.state.squares[squareIndex] !== 'O') {
			this.gameManager.updateState(squareIndex, 'X');
			this.setState({squares: this.gameManager.getSquares()});
		}
	};


}