import styled from 'styled-components'
import { BACKGROUND_ICONS_COLORS, backgroundProps } from '../../components/Colors/styles' 


export const Container = styled.main`
    max-width: 72.5rem;
    margin: 5.75rem auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    
    > div{
        > h1{
            font-family: 'Baloo 2';
            font-weight: 900;
            font-size: 2rem;
            line-height: 1.3;

            color: ${props => props.theme['--yellow-700']};
            margin-bottom: 4px;
        }

        > span{
            font-size: 1.25rem;
            line-height: 1.3;


            color: ${props => props.theme['base-subtitle']};
        }
    }
`

export const ShippingInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 102px;
`

export const Infos = styled.div`
    width: 100%;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid;
    border-color: transparent;
    background-image: ${props => `linear-gradient(to bottom right, ${props.theme['--yellow-500']}, ${props.theme['--purple-500']})`};

    > div{
        border-radius: 6px 36px 6px 36px;
        padding: 40px;
        background-color: white;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    `
export const Info = styled.div<backgroundProps>`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    > span{
        width: 32px;
        height: 32px;
        background-color: ${props => props.theme[BACKGROUND_ICONS_COLORS[props.presetcolors]]};
        color: ${props => props.theme.background};

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;

        line-height: 1.3
        ;
    }
`