import React, {
	Component
} from 'react';
import axios from 'axios';
// import bootsrap from 'bootstrap'
import '../css/bootsrap.css';
import '../css/dashboard.css'



import Uheader from '../conponent/syn/Uheader.jsx';
import Uleft from '../conponent/syn/Uleft.jsx';


import Personal from '../conponent/personal.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Souye extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		//  console.log(this);
		//绑定this指向
		//  this.handleClick= this.handleClick.bind(this);
	};

	render() {
		return (
			<div>
				<Uheader />
				<div>
					<div className="container-fluid">
						<div className="row">
							<Uleft />
							<Route path="/souye" component={Personal} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Souye;