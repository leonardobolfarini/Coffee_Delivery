import { useContext, useState } from "react"
import { ToAddQuantity } from "../../../components/ToAddQuantity"
import { CoffeeImage, Container, Order, Price, PriceAndOrderContainer } from "./styles"
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { CartContext } from "../../../contexts/CartContextProvider"

interface CardProps{
    coffee: {
        id: string
        name: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}

export function CoffeeCard({ coffee }: CardProps) {
    const { addItem } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    function incrementQuantity(){
        setQuantity((state) => state + 1)
    }

    function decrementQuantity(){
        if (quantity > 1){
            setQuantity((state) => state - 1)
        }
    }


    function handleAddItemToCart(){
        addItem({id: coffee.id, quantity })
        setQuantity(1)
    }

    return(
        <Container>
            <CoffeeImage src={coffee.image}/>
            <div>
                {coffee.tags.map((tag) => 
                    <span key={tag}>{tag}</span>
                )}
            </div>
            <h1>{coffee.name}</h1>
            <h2>{coffee.description}</h2>

            <PriceAndOrderContainer>
                <Price>
                    <span>R$</span>
                    <span>{coffee.price.toFixed(2)}</span>
                </Price>

                <Order>
                    <ToAddQuantity
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                    />
                    <button onClick={handleAddItemToCart}>
                        <ShoppingCartSimple size={24} weight="fill"/>
                    </button>
                </Order>
            </PriceAndOrderContainer>
        </Container>
    )
}