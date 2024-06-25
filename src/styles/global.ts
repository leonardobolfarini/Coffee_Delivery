import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :hover{
        outline: 0;
        box-shadow: 0 0 0 2 ${props => props.theme.background};
    }

    body{
        background: ${props => props.theme.background};
        color: ${props => props.theme['base-text']};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`