import React, { Component } from "react";

export class Content extends Component {
	render() {
		const { children } = this.props
		return (
			<div className="rpgui-content" style={{ overflowY: "scroll" }}>
		        <div
		          // className="rpgui-container"
		          style={{
		            position: "relative",
		            maxWidth: 900,
		            margin: "0 auto",
		            wordBreak: "word-break"
		          }}
		        >
					{ children }
				</div>
			</div>
		);
	}
}