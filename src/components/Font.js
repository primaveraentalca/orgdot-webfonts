import React, { Component } from "react";

export class Font extends Component {
	render() {
		const { font } = this.props;
		return (
			<div
				// className="rpgui-container framed"
				style={{
					position: "relative",
					marginBottom: 40,
					wordBreak: "break-word"
				}}
			>
				<div
					// className="rpgui-container framed"
					style={{
						position: "relative",
						padding: 20
					}}
				>
					<div
						className="rpgui-container framed-golden"
						style={{
							position: "relative"
							// marginBottom: 20,
						}}
					>
						<h1
							className={font.class}
							style={{
								textAlign: "left",
								marginLeft: 0
							}}
						>
							{font.family}
						</h1>
						<p
							className={font.class}
							style={{ wordBreak: "break-all" }}
						>
							{" "}!"#$%{"&"}'()*+,-./0123456789:;{"<"}=>?@<br />
							ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]<br />
							^_`abcdefghijklmnopqrstuvwxyz{"{"}|{"}"}~
						</p>
					</div>

					<h1
						style={{
							textAlign: "left",
							fontFamily: "Teachers Pet Sans Serif",
							marginTop: 32
						}}
					>
						Install
					</h1>
					<p
						style={{
							fontFamily: "Teachers Pet Sans Serif",
							marginLeft: 7
						}}
					>
						First, install the font like any other package
					</p>
					<div
						className="rpgui-container framed-grey rpgui-cursor-select"
						style={{
							position: "relative",
							userSelect: "text"
						}}
					>
						npm install --save {font.class}
					</div>

					<h1
						style={{
							textAlign: "left",
							fontFamily: "Teachers Pet Sans Serif",
							marginTop: 32
						}}
					>
						Usage
					</h1>

					<p
						style={{
							fontFamily: "Teachers Pet Sans Serif",
							marginLeft: 7
						}}
					>
						Require the package in your entry file.
					</p>

					<div
						className="rpgui-container framed-grey rpgui-cursor-select"
						style={{
							position: "relative",
							userSelect: "text"
						}}
					>
						require('{font.class}')
					</div>

					<p
						style={{
							fontFamily: "Teachers Pet Sans Serif",
							marginLeft: 7
						}}
					>
						Then, use the font in your styles
					</p>

					<div
						className="rpgui-container framed-grey rpgui-cursor-select"
						style={{
							position: "relative",
							userSelect: "text"
						}}
					>
						font-family: {"'"}
						{font.family}
						{"'"}
					</div>
				</div>
			</div>
		);
	}
}
