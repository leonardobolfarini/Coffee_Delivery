import { Container } from "./styles"
import { Minus, Plus } from '@phosphor-icons/react'


interface ToAddQuantityProps{
    quantity: number
    decrementQuantity: () => void
    incrementQuantity: () => void
} 

export function ToAddQuantity({ quantity, decrementQuantity, incrementQuantity }: ToAddQuantityProps){
    return(
        <Container>
            <button onClick={decrementQuantity}>
                <Minus size={12} weight="bold"/>
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={12} weight="bold"/>
            </button>
        </Container>
    )
}