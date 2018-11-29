import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arcade from '../images/Arcade.jpg';

class ArcadeGame extends Component {
	render() {
		return (
			<div className="container arcade">
				<h2 className="projectTitle">The Arcade Game</h2>
				<div className="row">
					<div className="col-md-4">
						<img className="images" src={arcade} alt="Arcade Game" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<p>
							- Recreating the classic arcade game Frogger using Art assets and game engine provided by Udacity.<br/>
							- Implemented Player, enemy, and other entities using Object-Oriented JavaScript.<br/>
							- Player and multiple enemies which can move around have been instantiated.
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Arcade-Game/'>
							<p>Go To Arcade Game!</p>
						</Link>
					</div>
				</div>
			</div>			
		);
	}
}

export default ArcadeGame;