import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';

const Global = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: consolas, sans-serif;
    }
`;

const theme = {
    colors: {
        primary: "green",
        secondary: "red"
    },
    media: {
        phone: "(max-width: 479px)",
        tablet: "(max-width: 768px) and (min-width: 480px)"
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global/>
        <App />
    </ThemeProvider>,
  document.getElementById('root')
);
