import React, { Component } from 'react';
class Uleft extends Component {
    render() {
    	return (
    		<div>
    			<nav className="col-md-2 d-none d-md-block bgLight sidebar">
		          <div className="sidebar-sticky">
		            <ul className="nav flex-column">
		              <li className="nav-item">
		                <a className="navLink active" href="#">
		                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
		                  首页 <span className="sr-only">(current)</span>
		                </a>
		              </li>
		            </ul>
		          </div>
		        </nav>
    		</div>
    	)
    }
}
export default Uleft;