import React, { Component } from 'react';
import Cookie from '../../common/cookie.js'

class Uheader extends Component {

	constructor(props) {
		var cookie = Cookie.get("userinfo");
		super(props);
		this.state = {
			name: [cookie]

		};
		//  console.log(this);
		//绑定this指向
		//  this.handleClick= this.handleClick.bind(this);
	}
	removeCookie() {
		Cookie.del("userinfo");
		if (Cookie == '') {

		}
		window.location.href = '/'
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 btn-primary">
					<a className="navbar-brand col-sm-2 col-md-2 mr-0" href="#">后台管理系统</a>
					<input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
					<ul className="navbar-nav px-4">
						<li className="nav-item text-nowrap">
							<a className="nav-link" onClick={this.removeCookie} data-toggle="modal" data-target="#exampleModal">退出</a>

							<div className="modal" tabindex="-1" role="dialog">
								<div className="modal-dialog" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Modal title</h5>
											<button type="button" className="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body">
											<p>Modal body text goes here.</p>
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
											<button type="button" className="btn btn-primary">Save changes</button>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="nav-item text-nowrap">
							{
								(function (self) {
									return self.state.name.map((item, index) => {
										return (
											<div key={index}>
												<img src="../../img/laohu.jpg" alt="" style={{ width: "30px", height: "30px" }} />
												<div style={{ color: "#fff" }}>{item}</div>
											</div>


										)
									})
								})(this)
							}
						</li>
					</ul>
				</nav>
			</div >
		)
	}
	componentDidMount() {
		//		this.getCookie();
	}
}
export default Uheader;