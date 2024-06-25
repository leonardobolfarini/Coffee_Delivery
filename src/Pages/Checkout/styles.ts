import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    max-width: 72.5rem;
    padding: 40px 20px;
    margin: 0 auto;
    gap: 2rem;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.3;
    }

    > form{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`

export const Header = styled.div`
    display: flex;
    gap: 0.5rem;

    > span{
        line-height: 1.3;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 2px;
    }

    > p{
        line-height: 1.3;
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
    }
`

export const AdressHeader = styled(Header)`
    svg{
        color: ${props => props.theme['--yellow-700']};
    }
`

export const PaymentMethodHeader = styled(Header)`
    svg{
        color: ${props => props.theme['--purple-700']};
    }
`

export const FormsContainer = styled.div`
    background: ${props => props.theme['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
    min-width: 640px;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const AdressContainer = styled(FormsContainer)``

export const AdressForm = styled.div`
    display: grid;
    grid-template-areas: 
    'cep . .'
    'street street street'
    'number additionalAdress additionalAdress'
    'neighborhood city state';
    grid-template-columns: 12.5rem 1fr 4rem;
    grid-gap: 0.75rem;
`

export const PaymentMethodContainer = styled(FormsContainer)``

export const PaymentMethodOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    
`

export const CartTotal = styled.div`
    min-width: 448px;

    background: ${props => props.theme['base-card']};
    border-radius: 6px 44px;

    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CoffeeBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 4px;

    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    > div{
        display: flex;
        gap: 1.25rem;

        > img{
            width: 64px;
            height: 64px;
        }
        > div{
            > span{
                line-height: 1.3;
                color: ${props => props.theme['base-subtitle']};
            }
        }  
    }

    aside{
        color: ${props => props.theme['base-text']};
        line-height: 1.3;
        font-weight: 700;
    }
`

export const QuantityAndRemoveItensContainer = styled.div`
    display: flex;

    margin-top: 8px;
    gap: 8px;

    > button{
        padding: 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        border: 0;
        border-radius: 6px;

        transition: background 0.2s, color 0.2s;

        > svg{
        color: ${props => props.theme['--purple-500']};
        }

        > span{
            text-transform: uppercase;

            font-size: 0.75rem;
            line-height: 1.3;
            color: ${props => props.theme['base-text']};
        }
        
        &:hover{
            background: ${props => props.theme['base-hover']};
            
            > svg {
                color: ${props => props.theme['--purple-700']}
            }
        }
    }
`

export const CartTotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div{
        display: flex;
        justify-content: space-between;

        span:first-child{
            font-size: 0.875rem;
            line-height: 1.3
        
        }

        span:last-child{
            line-height: 1.3;
        }
    }

    div:last-child{
        span{
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 1.3;
            color: ${props => props.theme['base-subtitle']};
        }
    }
`

export const CartCheckoutButton = styled.button`
    background: ${props => props.theme['--yellow-500']};
    color: ${props => props.theme.white};

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;

    border: 0;
    border-radius: 8px;
    padding: 12px 8px;

    transition: background 0.2s;

    &:hover{
        background: ${props => props.theme['--yellow-700']};
    }
`

export const PaymentMethodErrorBox = styled.p``