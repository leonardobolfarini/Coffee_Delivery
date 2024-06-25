import { OrderData } from "../../Pages/Checkout"
import { ActionTypes, Actions } from "./action"
import { produce } from 'immer'


export interface Coffee{
    id: string
    quantity: number
}

export interface Order extends OrderData {
    id: number
    items: Coffee[]
}

interface CartState{
    cart: Coffee[]
    orders: Order[]
}

export function cartReducer(state: CartState, action: Actions){
    switch (action.type){
        case ActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                const itemAlreadyAdded = draft.cart.find(
                    (item) => item.id === action.payload.coffee.id
                )

                if (itemAlreadyAdded) {
                    itemAlreadyAdded.quantity += action.payload.coffee.quantity
                } else {
                    draft.cart.push(action.payload.coffee)
                }
            })
            
        case ActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                const itemToRemove = draft.cart.findIndex(
                    (item) => item.id === action.payload.coffeeID
                )
                draft.cart.splice(itemToRemove, 1)
            })

        case ActionTypes.INCREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToIncrement = draft.cart.find(
                    (item) => item.id === action.payload.coffeeID
                )

                if (itemToIncrement?.id){
                    itemToIncrement.quantity += 1
                }
            })

        case ActionTypes.DECREMENT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToDecrement = draft.cart.find(
                    (item) => item.id === action.payload.coffeeID
                )

                if (itemToDecrement?.id && itemToDecrement.quantity > 1){
                    itemToDecrement.quantity -= 1
                }
            })
            
        case ActionTypes.CHECKOUT_CART:
            return produce(state, (draft) => {
                const newOrder = {
                    id: new Date().getTime(),
                    items: state.cart,
                    ...action.payload.order
                }
                draft.orders.push(newOrder)
                draft.cart = []

                action.payload.callback(`/checkout/${newOrder.id}/success`)
            })

        default:
            return state   
    }   
}