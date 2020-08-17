import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    ${(props) => {
        const theme = props.theme;
        let append = '';
        Object.entries(theme).forEach(([prop, value]) => {
            append += `${prop}: ${value};`;
        });
        return append;
    }}
    font-size: 60%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 1.25s linear;
    transition: color 1.25s linear;
}

html, body, #root {
    height: 100vh;
}

body {
    background-color: var(--color-background);
    transition: background-color 1.25s linear;
}

#root{
    display: flex;
    align-items: center;
    justify-content: center;
}

body,
input,
button,
textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
}

.container{
    width: 90vw;
    max-width: 700px;
}

@media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
}
`