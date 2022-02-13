import React, {useState} from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";

import css from './SwitchTheme.css'

const SwichTheme = () => {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };


    const darkTheme = {
        body: "#000",
        textColor: "#fff",
        headingColor: "lightblue"
    }

    const lightTheme = {
        body: "#fff",
        textColor: "#000",
        headingColor: "#d23669"
    }

    const GlobalStyles = createGlobalStyle`
      body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.textColor};
        transition: .3s ease;
      }

      h2 {
        color: ${props => props.theme.headingColor};
      }
    `
    return (
        <div>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles/>
                <div className="App">
                    <button className={'buttonSwitch'} onClick={switchTheme}>Day and Night</button>
                </div>
            </ThemeProvider>
        </div>
    );
};

export {SwichTheme};