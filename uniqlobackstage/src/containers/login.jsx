import React, {
	Component
} from 'react';
import '../css/bootsrap.css';
import '../css/signin.css';
import '../css/translateelement.css'
import axios from 'axios';
import Cookie from '../common/cookie.js'
console.log(Cookie);
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		//  console.log(this);
		//绑定this指向
		//  this.handleClick= this.handleClick.bind(this);
	}

	handleClick() {
		var user = document.querySelector("#inputName").value;
		var pass = document.querySelector("#inputPassword").value;
		if (!user == '') {
			axios({
				url: 'http://localhost:3000/users/user', //这里填后端接口地址
				type: 'GET',
				params: {
					user: user,
					pass: pass
				}
			}).then(res => {
				console.log(res);
				var data = res.data;
				if (data == 'yes') {
					Cookie.set('userinfo', user, 7);
					window.location.href = "/souye";
				} else if (data == "no") {
					alert("您输入的信息错误!")
				}
			}).catch(err => {
				console.log(err)
			});
		} else {
			alert("请输入账号!")
		}
	}
	render() {

		return (

			<form className="form-signin" style={{margin:"auto"}}>
				<img className="mb-4" src={require('../img/buzhia.gif')} />
				<h1 className="h3 mb-3 font-weight-normal">
					<font style={{ verticalAlign: "inherit" }}>
						<font style={{ verticalAlign: "inherit" }}>请登录</font>
					</font>
				</h1>
				<label htmlFor="inputPhone" className="sr-only">
					<font style={{ verticalAlign: "inherit" }}>
						<font style={{ verticalAlign: "inherit" }}>用户名</font>
					</font>
				</label>
				<input type="phone" id="inputName" className="form-control" placeholder="userName" required="" autoFocus="" />
				<label htmlFor="inputPassword" className="sr-only">
					<font style={{ verticalAlign: "inherit" }}>
						<font style={{ verticalAlign: "inherit" }}>密码</font>
					</font>
				</label>
				<input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
				<br/>
				<button className="btn btn-lg btn-primary btn-block" onClick={this.handleClick} type="button">登录</button>
				<p className="mt-5 mb-3 text-muted">
					<font style={{ verticalAlign: "inherit" }}>
						<font style={{ verticalAlign: "inherit" }}>©2017-2018</font>
					</font>
				</p>
			</form>

		);
	}
	componentDidMount() {
		//				this.handleClick()
	}
}
export default Login;