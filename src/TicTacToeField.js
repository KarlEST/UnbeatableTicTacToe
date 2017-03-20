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
			<div className="gamefield">
				<div className="tictactoefield">
					<PlayField squares={this.state.squares} onClick={this.handleClick}/>
				</div>
				<div className="score"> {this.state.winner} </div>
			</div>
		);
	}

	handleClick = (squareIndex, value) => {
		if (this.gameManager.getEmptySquares().length === 0 || this.state.winner !== null) {
			this.gameManager.startAgain();
			this.setState({
				squares: this.gameManager.getSquares(),
				winner: null,
			});

		} else if (value === '') {
			this.gameManager.updateState(squareIndex, 'X');
			this.setState({ squares: this.gameManager.getSquares() });
			const isWin = this.gameManager.checkWin();

			if (isWin) {
				this.setState({ winner: 'YOU WON' });

			} else if (this.gameManager.getEmptySquares().length === 0) {
				this.setState({ winner: 'It\'s a draw' });

			} else {
				const test = this.gameManager.minimax(this.gameManager.getSquares(), true);
				this.gameManager.updateState(test.index, 'O');
				this.setState({ squares: this.gameManager.getSquares() });
				const isBotWin = this.gameManager.checkWin(this.gameManager.getSquares(), 'O');

				if (isBotWin) {
					this.setState({ winner: 'Bot won' });

				} else if (this.gameManager.getEmptySquares().length === 0) {
					this.setState({ winner: 'It\'s a draw' });
				}
			}

		}
	};


}