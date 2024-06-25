import styled from 'styled-components'

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputField = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.75rem;
    &:focus-within{
            border: 1px solid ${props => props.theme['--yellow-700']};
        }

    input{
        background-color: transparent;
        border: 0;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${props => props.theme['base-text']};

        &:focus{
            outline: 0;
        }
    }

    input[type='number']{
        appearance: textfield;
        -moz-appearance: textfield;
    }

    span{
            font-style: italic;
            font-size: 0.75rem;
            line-height: 1.3;
            color: ${props => props.theme['base-label']};
        }
`