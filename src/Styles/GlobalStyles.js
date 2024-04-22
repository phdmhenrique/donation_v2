import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body,
#root {
    height: 100%;
    font-size: 62.5%;
    overflow-x: hidden;
}

*,
button,
input,
a,
ul,
li {
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    font-family: "Uni Neue", sans-serif;
}

:root {
    /* identidade visual principal */
    --primary: #F97272;
    --secondary: #FFBE98;
    --tertiary: #2CB859;
    --quaternary: #EAC648;
    --quinary: #FF2C2C;
    --neutrals: #DCBD9E;

    /* preto e branco */
    --black: #000000;
    --black-opacity75: #00000075;
    --white: #FFFFFF;
    --white-smoke: #EEEEEE;

    /* escala de cinza */
    --gray-1: #F1F1F1;
    --gray-2: #E4E4E4;
    --gray-3: #7B7B7B;
    --gray-4: #585858;
    --gray-5: #3F4243;
    --gray-6: #3F4243;

    /* tamanhos de fonte */
    --font__10: 1rem;
    --font__12: 1.2rem;
    --font__14: 1.4rem;
    --font__16: 1.6rem;
    --font__18: 1.8rem;
    --font__20: 2.0rem;
    --font__22: 2.2rem;
    --font__24: 2.4rem;
    --font__26: 2.6rem;
    --font__28: 2.8rem;
    --font__30: 3.0rem;
    --font__35: 3.5rem;
}
`;

export default GlobalStyles;
