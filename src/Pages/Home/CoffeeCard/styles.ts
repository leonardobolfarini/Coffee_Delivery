import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.theme['base-card']};
    width: 16rem;
    border-radius: 6px 36px 6px 36px;
    padding: 0 1.25rem 1.25rem;

    display: flex;
    flex-direction: column;

    text-align: center;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;

        > span {
            margin: 1rem 0 1.25rem;
            font-size: 0.625rem;
            font-weight: bold;
            line-height: 1.3;
            text-transform: uppercase;
            background: ${props => props.theme['--yellow-100']};
            color: ${props => props.theme['--yellow-700']}; 
            padding: 0.25rem 0.5rem;
            border-radius: 100px;
        }
    }

    > h1{
        font-family: "Baloo 2", sans-serif;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
    }

    > h2 {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${props => props.theme['base-label']};
    }
`

export const CoffeeImage = styled.img`
    max-width: 120px;
    max-height: 120px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: -2rem;
`

export const PriceAndOrderContainer = styled.div`
    margin-top: 32px;
    justify-content: space-between;
`

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.25rem;

    span:first-child{
        font-size: 0.875rem;
        line-height: 1.3;
    }

    span:last-child{
        font-family: "Baloo 2", sans-serif;
        font-weight: 900;
        line-height: 1.3;
        font-size: 1.5rem;
    }
`

export const Order = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    
    > button{
        display: flex;
        align-items: center;

        color: ${props => props.theme['base-card']};
        background: ${props => props.theme['--purple-700']};

        border: 0;
        padding: 0.5rem;
        border-radius: 6px;

        transition: 0.2s background;

        &:hover{
            background: ${props => props.theme['--purple-500']};
        }
    }

`