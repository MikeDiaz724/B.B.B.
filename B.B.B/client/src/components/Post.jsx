import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: []
			}
		};

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
			<div className = "posting">
				<div>
					<center>
						<table>
							<tr>
								<td>
									<h3>Posting title</h3>
									<input style={{ width: "500px" }} type="text" placeholder="Enter post title" />
								</td>
								<td>
									<h3>Specific location</h3>
									<input style={{ width: "300px" }} type="text" placeholder="Enter location" />
								</td>
								<td>
									<h3>Postal code</h3>
									<input type="text" placeholder="Enter postal code" />
								</td>
							</tr>
						</table>
					</center>
				</div>

				<div>
						<h3 style = {{marginLeft:"160px"}} >Posting body</h3>
					<center>
						<input style={{ width: "960px", height:"400px" }} type="text" placeholder="Enter post title" />
					</center>
				</div>

				<br/>
				<br/>

				<div>
					<center>
						<DragAndDrop handleDrop={this.handleDrop} style={{
							border: 'dashed grey 4px',
							backgroundColor: 'rgba(255,255,255,.8)'
						}}> Drop images here
							<div style={{ height: 200, width: 950 }}>
								{this.state.files.map((file) =>
									<div key={file}>{file}</div>
								)}
							</div>
						</DragAndDrop>
					</center>
				</div>
				
				<br/>

				<div>
					<center>
						<button type = 'submit' >Submit</button>
					</center>
				</div>
			</div>
	)};
};

export default Post;