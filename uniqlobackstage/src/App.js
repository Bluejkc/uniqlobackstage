import React, {
	Component
} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Login from './containers/login.jsx';
import Souye from './containers/souye.jsx'

class App extends Component {
	render() {
		return(
			
			<Router>
				<div>
					<Route path="/" exact component={Login}/>
					<Route path="/souye" component = {Souye} />					
				</div>
		    </Router>
		);
	}
}

export default App;