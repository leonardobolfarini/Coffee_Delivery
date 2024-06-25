import styled from 'styled-components'
import { BACKGROUND_ICONS_COLORS, backgroundProps } from '../../components/Colors/styles'

export const HomeContainer = styled.main`
    margin: 0 10rem;
`

export const IntroContainer = styled.div`
    max-width: 72.5rem;
    margin: 5.75rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    div h1{
        font-family: "Baloo 2", sans-serif;
        font-size: 3rem;
        font-weight: 900;
        line-height: 1.3;
        color: ${props => props.theme['base-title']};
    }

    div h3{
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
        margin: 1rem 0 4.125rem;;
        color: ${props => props.theme['base-subtitle']};
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const ItensContainer = styled.span`
    margin: 1.25rem;
    display: flex;
    gap: 2.5rem;
`

export const ItensStyle = styled.div<backgroundProps>`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    span{
        color: ${props => props.theme.background};
        background: ${props => props.theme[BACKGROUND_ICONS_COLORS[props.presetcolors]]};
        padding: 0.675rem;
        border-radius: 1000px;
    }
`

export const CoffeeList = styled.div`
    max-width: 72.5rem;
    padding: 32px 20px 150px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3.375rem;
    
    > h1{
        font-family: "Baloo 2", sans-serif;
        font-weight: 900;
        font-size: 2rem;
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
    }
    
    > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`