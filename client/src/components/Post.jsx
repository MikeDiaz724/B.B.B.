import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: "",
			fecha: "",
			title: "",
			postalCode: 0,
			pics:"",
			donde: "",
			userid:0,
			files: [
				'nice.pdf',
				'verycool.jpg',
				'amazing.png'
			]
			};
		}

	postData(url = '', data = {}) {
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.catch(err => console.error(err));
	}

	handleInput(e) {
		const { target } = e;
		const { name, value } = target;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const { info, fecha, title, postalCode, pics, donde, userid } = this.state;

		this.postData('/register', {
			info: info.toLowerCase(),
			fecha: fecha,
			title: title.toLowerCase(),
			postalCode: postalCode,
			pics: pics,
			donde: donde.toLowerCase(),
			userid: userid
		});

		this.setState({
			info: "",
			fecha: "",
			title: "",
			postalCode: "",
			pics: "",
			donde: "",
			userid: "",
		});
	}

	handleDrop = files => {
		let fileList = this.state.files
		for (let i = 0; i < files.length; i++) {
			if (!files[i].name)
				return fileList.push(files[i].name)
		}
		this.setState({ files: fileList })
	}


	render() {
		return (
			<div className="posting">
				<div>
					<center>
						<table>
							<tr>
								<td>
									<h3>Posting title</h3>
									<input 
										style={{ width: "500px" }} 
										type="text" 
										placeholder="Enter post title"
										value = {title}
										onChange={this.handleInput} />
								</td>
								<td>
									<h3>Specific location</h3>
									<input 
									style={{ width: "300px" }} 
									type="text" 
									placeholder="Enter location"
									value = {donde} 
									onChange={this.handleInput}/>
								</td>
								<td>
									<h3>Postal code</h3>
									<input 
										type="text" 
										placeholder="Enter postal code"
										value ={postalCode} 
										onChange={this.handleInput}/>
								</td>
							</tr>
						</table>
					</center>
				</div>

				<div>
					<h3 style={{ marginLeft: "160px" }} >Posting body</h3>
					<center>
						<input 
							style={{ width: "960px", 
							height: "400px" }} 
							type="text" 
							placeholder="Enter post title"
							value = {info}
							onChange={this.handleInput} />
					</center>
				</div>

				<br />
				<br />

				<div>
					<center>
						<DragAndDrop handleDrop={this.handleDrop} style={{
							border: 'dashed grey 4px',
							backgroundColor: 'rgba(255,255,255,.8)'
						}}> You can drag images here to upload them
							<div style={{ height: 200, width: 950 }}>
								{this.state.files.map((file) =>
									<div key={file}>{file}</div>
								)}
							</div>
						</DragAndDrop>
					</center>
				</div>

				<br />

				<div>
					<center>
						<button type='submit' onClick={this.handleSubmit}>Submit</button>
					</center>
				</div>
			</div>
		)
	};
};

export default Post;