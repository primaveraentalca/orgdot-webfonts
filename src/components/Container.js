import React, { Component } from "react";

export class Container extends Component {
	render() {
		const { children } = this.props
		return (
			<div
				className="rpgui-container framed"
				style={{
					position: "relative",
					marginBottom: 40,
				}}
			>
				{ children }
			</div>
		);
	}
}
