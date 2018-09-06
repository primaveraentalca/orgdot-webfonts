import React, { Component } from 'react';

export class Paragraph extends Component {
	render() {
		const { children } = this.props
		return (
            <p
              style={{
                fontSize: "125%",
                textAlign: "left",
                fontFamily: "Teachers Pet Sans Serif",
                marginLeft: 7
              }}
            >
            { children }
            </p>
		);
	}
}
