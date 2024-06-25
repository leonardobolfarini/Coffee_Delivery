import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme['base-button']};
    padding: 0.5rem;
    display: flex;
    gap: 4px;
    border-radius: 6px;

    button{
        background: ${props => props.theme['base-button']};
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            color: ${props => props.theme['--purple-500']};

            &:hover{
                color: ${props => props.theme['--purple-700']};
            }  
        }
    }

    span{
        line-height: 1.3;
    }
` 