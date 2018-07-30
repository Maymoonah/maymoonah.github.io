import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PixelArt extends Component {
	render() {
		return (
			<div>
				<Link to='/projects'>
					<h1 className="title">Projects</h1>
				</Link>
				<div className="row">
					<div className="col-md-4">
						<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Pixel Art" width="100%" height="100%"/>
					</div>
					<div className="col-md-8">
						<p>
							- Customizable canvas where the user can create art by coloring pixels.
							<br />
							- I created the application using HTML5, CSS3, and JavaScript.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PixelArt;