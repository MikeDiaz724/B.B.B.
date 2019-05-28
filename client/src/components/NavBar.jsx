import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	//renders data to the DOM
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
							<Link to={'/'} className="navbar-brand"> B.B.B. </Link>
						</div>
						<form className="navbar-form navbar-left" action="/action_page.php">
							<div className="input-group">
								<input style={{ width: "500px" }} type="text" className="form-control" placeholder="Search"/>>
									<div className="input-group-btn">
										<button className="btn btn-default" type="submit" style={{position: 'inherit'}}>
											<i className="glyphicon glyphicon-search"></i>
										</button>
									</div>
  							</div>
						</form> 
						<ul className="nav navbar-nav navbar-right">
							<li><Link to={'/post'} className="glyphicon ">Barter on B.B.B. </Link></li>
							<li><Link to={'/register'} className="glyphicon glyphicon-user">Sign up</Link></li>
							<li><Link to={'/login'} className="glyphicon glyphicon-log-in">Sign in</Link></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
};

export default NavBar;