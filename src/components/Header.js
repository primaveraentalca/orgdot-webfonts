import React, { Component } from 'react';

export class Header extends Component {
	render() {
		const { children, size } = this.props

		const getHeaderSize = () => {
			switch (size) {
			  case "big":
			    return "250%"
			    break;
			  case "medium":
			    return "175%"
			    break;
			  case "small":
			    return "125%"
			    break;
				default:
			  	return "250%"
			  	break;
			}
		}
		return (
			<h1
				style={{
					fontSize: getHeaderSize(),
					textAlign: "left",
					fontFamily: "Teachers Pet Sans Serif"
				}}
			>
				{ children }
			</h1>
		);
	}
}
