import React, { Component } from 'react';
class Personal extends Component {
	getData() {
		
	}
	
    render() {
    	return (
    		<div>
    			<table className="table">
				  <thead className="thead-light">
				    <tr>
				      <th scope="col">序号</th>
				      <th scope="col">用户名</th>
				      <th scope="col">密码</th>
				      <th scope="col">操作</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>Mark</td>
				      <td>Otto</td>
				      <td>@mdo</td>
				    </tr>
				  </tbody>
				</table>
    		</div>
    	)
    }
    componentDidMount() {
		this.getData();
	}
}
export default Personal;