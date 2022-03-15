import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    
    *{
        margin: 0;
        padding: 0;
        outline:0;
    }

    #root{
        margin:0 auto;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
    }

    
    html,
    body,
    #root {
    height: 100%;
    width: 100%;
    }

    body {
    font-family: system-ui;
    margin: 0;
    }

    *,
    *:after,
    *:before {
    box-sizing: border-box;
    }

      

`






