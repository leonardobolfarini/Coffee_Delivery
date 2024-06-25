import styled from 'styled-components'

export const Container = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: first baseline;
    
    width: 11.5rem;
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 6px;

    background: ${props => props.theme['base-button']};
    text-transform: uppercase;

    font-size: 0.75rem;
    line-height: 1.3;

    transition: background 0.2s, color 0.2s;

    input{
        display: none;
    }

    svg{
        color: ${props => props.theme['--purple-500']};
    }

    &:hover{
        background: ${props => props.theme['base-hover']};
        color: ${props => props.theme['base-subtitle']};
    }

    &[data-state='true']{
        background: ${props => props.theme['--purple-100']};
        border: 1px solid ${props => props.theme['--purple-500']};
    }
`