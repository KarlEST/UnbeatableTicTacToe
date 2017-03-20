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

	getEmptySquares(board = this.squares) {
		return  board.filter(square => square !== 'X' && square !== 'O');
	}

	getSquares() {
		return this.squares;
	}

	startAgain() {
		this.squares = this.getInitialSquaresState();
	}

	checkWin(board = this.squares, player = 'X') {
		// const check = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
		//
		// return check.findIndex((list) => {
		// 	return (this.squares[list[0]].squareValue === this.squares[list[1]].squareValue &&
		// 	this.squares[list[0]].squareValue === this.squares[list[2]].squareValue &&
		// 	this.squares[list[0]].squareValue !== '');
		// });

		if (
			(board[0] === player && board[1] === player && board[2] === player) ||
			(board[3] === player && board[4] === player && board[5] === player) ||
			(board[6] === player && board[7] === player && board[8] === player) ||
			(board[0] === player && board[3] === player && board[6] === player) ||
			(board[1] === player && board[4] === player && board[7] === player) ||
			(board[2] === player && board[5] === player && board[8] === player) ||
			(board[0] === player && board[4] === player && board[8] === player) ||
			(board[2] === player && board[4] === player && board[6] === player)
		) {
			return true;
		} else {
			return false;
		}
	}

	minimax(board = this.squares, isMax) {

		const emptySquares = this.getEmptySquares(board);

		if (this.checkWin(board, 'X')) {
			return {score: -10};
		} else if(this.checkWin(board, 'O')) {
			return {score: 10};
		} else if(emptySquares.length === 0) {
			return {score: 0};
		}

		if (isMax) {
			let bestMove = {
				index: 0,
				score: -Infinity,
			};

			emptySquares.forEach((emptySquareIndex) => {
				board[emptySquareIndex] = 'O';

				const newValue = this.minimax(board, false)

				if (newValue.score > bestMove.score) {
					bestMove = newValue;
					bestMove.index = emptySquareIndex;
				}

				board[emptySquareIndex] = emptySquareIndex;
			});

			return bestMove;
		} else {
			let bestMove = {
				index: 0,
				score: Infinity,
			};

			emptySquares.forEach((emptySquareIndex) => {
				board[emptySquareIndex] = 'X';

				const newValue = this.minimax(board, true);

				if (newValue.score < bestMove.score) {
					bestMove = newValue;
					bestMove.index = emptySquareIndex;
				}
				board[emptySquareIndex] = emptySquareIndex;
			});

			return bestMove;
		}
	}
}