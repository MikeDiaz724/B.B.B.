import React, { Component } from 'react';

class NavBar extends Component {
	//renders data to the DOM
	render() {
		return (
			<div>
				<nav class="navbar navbar-inverse">
					<div class="container-fluid">
						<div class="navbar-header">
							<a class="navbar-brand" href="#">B.B.B.</a>
						</div>
						<form class="navbar-form navbar-left" action="/action_page.php">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Search"/>>
									<div class="input-group-btn">
										<button class="btn btn-default" type="submit" style={{position: 'inherit', top: -10}}>
											<i class="glyphicon glyphicon-search"></i>
										</button>
									</div>
  							</div>
						</form> 
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#"><span class="glyphicon "></span> Barter on B.B.B.</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
};

export default NavBar;