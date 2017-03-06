import React, { Component } from 'react';
import './App.css';
import TicTacToeField from './TicTacToeField';

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="title">
					Unbeatable TicTacToe
				</div>
				<TicTacToeField />
			</div>
		);
	}
}

export default App;
