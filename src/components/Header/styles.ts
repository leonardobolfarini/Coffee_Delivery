import styled from 'styled-components'

export const HeaderStyle = styled.header`
    max-width: 72.5rem;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.75rem;
    }

    > div div{
        display: flex;
        gap: 0.25rem;
        padding: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${props => props.theme['--purple-700']};
        background: ${props => props.theme['--purple-100']};
        border-radius: 6px;

        svg{
            color: ${props => props.theme['--purple-500']};
        }
    }

    > div nav{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        color: ${props => props.theme['--yellow-700']};
        background: ${props => props.theme['--yellow-100']};
        border-radius: 6px;
        cursor: pointer;

        position: relative;

        span{
            background: ${props => props.theme['--yellow-700']};
            color: ${props => props.theme.white};

            width: 1.25rem;
            height: 1.25rem;

            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            font-size: 0.75rem;
            line-height: 1.3;
            font-weight: 700;

            position: absolute;
            top: 0px;
            right: 0px;
            transform: translate(50%, -50%);
        }
    }

`