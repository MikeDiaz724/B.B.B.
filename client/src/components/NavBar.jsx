import React, { Component } from 'react';

class NavBar extends Component {
	//renders data to the DOM
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">B.B.B.</a>
						</div>
						<form className="navbar-form navbar-left" action="/action_page.php">
							<div className="input-group">
								<input type="text" className="form-control" placeholder="Search"/>>
									<div className="input-group-btn">
										<button className="btn btn-default" type="submit" style={{position: 'inherit'}}>
											<i className="glyphicon glyphicon-search"></i>
										</button>
									</div>
  							</div>
						</form> 
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#"><span className="glyphicon "></span> Barter on B.B.B.</a></li>
							<li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
							<li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
};

export default NavBar;