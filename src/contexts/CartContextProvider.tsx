import { ReactNode, createContext, useEffect, useReducer } from "react";
import { OrderData } from "../Pages/Checkout";
import { Coffee, Order, cartReducer } from "../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { addItemAction, checkoutCart, decrementItemQuantityAction, incrementItemQuantityAction, removeItemFromCartAction } from '../reducers/cart/action'

interface CartContextType{
    cart: Coffee[]
    orders: Order[]
    addItem: (item: Coffee) => void
    removeItemFromCart: (itemID: Coffee['id']) => void
    incrementItemQuantity: (itemID: Coffee['id']) => void
    decrementItemQuantity: (itemID: Coffee['id']) => void
    checkoutOrder: (order: OrderData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider( {children}: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: [],
            orders: []
        },
        (cartState) => {
            const storadStateAsJson = localStorage.getItem(
                '@coffee-delivery:cart-state:1.0.0',
            )

            if (storadStateAsJson) {
                return JSON.parse(storadStateAsJson)
            }

            return cartState
        },

    )
    
    const { cart, orders } = cartState
    
    function addItem(coffee: Coffee){
        dispatch(addItemAction(coffee))
    }
    
    function removeItemFromCart(coffeeID: Coffee['id']){
        dispatch(removeItemFromCartAction(coffeeID))
    }
    
    function incrementItemQuantity(coffeeID: Coffee['id']){
        dispatch(incrementItemQuantityAction(coffeeID))
    }
    
    function decrementItemQuantity(coffeeID: Coffee['id']){
        dispatch(decrementItemQuantityAction(coffeeID))
    }

    const navigate = useNavigate()
    
    function checkoutOrder(order: OrderData){
        dispatch(checkoutCart(order, navigate))
    }

    useEffect(() => {
        if (cartState){
            const stateJson = JSON.stringify(cartState)
            localStorage.setItem('@coffee-delivery:cart-state:1.0.0', stateJson)
        }

    }, [cartState])
    


    return (
        <CartContext.Provider
            value={{
                cart,
                orders,
                addItem,
                removeItemFromCart,
                incrementItemQuantity,
                decrementItemQuantity,
                checkoutOrder,
            }}                
        >
            {children}
        </CartContext.Provider>
    )
}