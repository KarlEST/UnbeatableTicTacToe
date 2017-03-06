export default class GameManager {

	constructor() {
		this.squares = this.getInitialSquaresState();
	}

	getInitialSquaresState() {
		return [0, 1, 2, 3, 4, 5, 6, 7, 8];
	}

	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	//
	// Game SquaresState positions visualisation:
	//
	//
	//	   |   |
	//	 0 | 1 | 2
	//	___|___|___
	//	   |   |
	//	 3 | 4 | 5
	//	___|___|___
	//	   |   |
	//	 6 | 7 | 8
	//	   |   |
	//
	/////////////////////////////////////////////////

	updateState(squareIndex, value) {
		this.squares[squareIndex] = value;
	}

	getEmptySquares() {
		return this.squares.filter(square => square !== 'X' && square !== 'O');
	}

	getSquares() {
		return this.squares;
	}

	startAgain() {
		this.squares = this.getInitialSquaresState();
	}

	checkWin() {
		const check = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

		return check.findIndex((list) => {
			return (this.squares[list[0]].squareValue === this.squares[list[1]].squareValue &&
			this.squares[list[0]].squareValue === this.squares[list[2]].squareValue &&
			this.squares[list[0]].squareValue !== '');
		});
	}
}