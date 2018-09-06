import React, { Component } from "react";
import { Font } from "./components/Font";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Paragraph } from "./components/Paragraph";
import { Content } from "./components/Content";

import fonts from "./fonts.json";

import "rpgui/rpgui.min.css";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        "class": "orgdot-fixed-bold",
        "family": "fixed_bold"
      }
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(font) {
    this.setState(prevState => ({
      current: font
    }));
  }

  render() {
    const { current } = this.state;
    return (
      <Content>
        <header
          style={{
              padding: "40px 0"
          }}
        >
          <Header size="big">
            orgdot-webfonts
          </Header>
          <Paragraph>
            NPM packages to easily self-host Orgdot web fonts.
          </Paragraph>
          <A href="https://github.com/primaveraentalca/orgdot-webfonts">
            <button className="rpgui-button">
              <p>View on GitHub</p>
            </button>
          </A>
        </header>

        <Container>
          <Header size="medium">
            Requirements
          </Header>
          <Paragraph>
            You need to have webpack setup to load CSS and font files. For
            many tools built with Webpack such as{" "}
            <A href="https://github.com/gatsbyjs/gatsby">Gatsby</A> and{" "}
            <A href="https://github.com/facebookincubator/create-react-app">
              Create React App
            </A>, it should work out-of-the-box. Also tested with{" "}
            <A href="https://parceljs.org/">ParcelJS</A> bundler.
          </Paragraph>
        </Container>

        <Container>
          <Header size="medium">
            The fonts
          </Header>
          <Paragraph>
            Choose a font from the list below for a preview and install instructions
          </Paragraph>

          {
            <ul
              className="rpgui-list-imp"
              style={{
                  height: "140px"
                  //maxWidth: 360
              }}
            >
              {fonts.map((font, index) => {
                return (
                  <li
                    key={index}
                    data-rpguivalue={font.family}
                    // className={font.class + (current.class == font.class ? ' rpgui-selected' : font.class)}
                    // className={font.class}
                    className={current.class == font.class ? `${ font.class + ' rpgui-selected'}` : font.class}
                    onClick={() =>
                      this.handleClick({
                          class: font.class,
                          family: font.family
                      })
                    }
                  >
                    {font.family}
                  </li>
                );
              })}
            </ul>
          }

          {current ? <Font font={current} /> : null}

          {/*
              fonts.map((font, index) => {
            return <Font key={index} font={font} />;
              })
          */}
        </Container>

        <Container>
          <Header size="medium">
            About
          </Header>
          <Paragraph>
            I'm NOT the owner of these fonts.<br />
            These are the collective work of the{" "}
            <A href="http://www.orgdot.com">Orgdot Consortium</A>.<br />
            <br />
            I generated the web fonts from{" "}
            <A href="http://www.orgdot.com/aliasfonts/index.htm">
              this files
            </A>{" "}
            using <A href="https://transfonter.org/">Transfonter</A>.<br />
            <br />
            The idea of publishing npm packages for easy self-hosting comes
            from the{" "}
            <A href="https://github.com/KyleAMathews/typefaces">
              Typefaces
            </A>{" "}
            project.<br />
            <br />
            This site was bootstrapped with <A href="http://github.com/sw-yx/create-react-app-parcel">C.R.A.P.</A> and styled with <A href="https://github.com/RonenNess/RPGUI">RPGUI</A>.
          </Paragraph>
          </Container>
      </Content>
    );
  }
}

function A(props) {
  // you can use object spread because babel-preset-react-app is set up for you
  const { href, children, ...rest } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}

export default App;
