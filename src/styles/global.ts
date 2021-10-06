import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #f8f2f5;

    --red: #E52e54;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF

}

html { 
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

//por padrão, input, textarea e buttons vem com suas fontes prórias e não pegam as fontes do body, por isso colocamos aqui, para sobreescrever a fonte delas 
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

//para ajeitar o fw em negritos
h1, h2, h3, h4, h5, h6, strong {
font-family: 'Poppins', sans-serif;
font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity:0.6;
    cursor: not-allowed;
}
`;
