import { OrderData } from "../../Pages/Checkout"
import { Coffee } from "./reducer"
import { NavigateFunction } from 'react-router-dom'

export const enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
    DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
    CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
    {
        type: ActionTypes.ADD_ITEM
        payload: {
            coffee: Coffee
        }
    }

    | {
        type: ActionTypes.REMOVE_ITEM | ActionTypes.DECREMENT_ITEM_QUANTITY | ActionTypes.INCREMENT_ITEM_QUANTITY
        payload :{
            coffeeID: Coffee['id'] 
        }
    }

    | {
        type: ActionTypes.CHECKOUT_CART
        payload: {
            order: OrderData
            callback: NavigateFunction
        }
    }

export function addItemAction(coffee: Coffee){
    return{
        type: ActionTypes.ADD_ITEM,
        payload: {
            coffee,
        },
    } satisfies Actions
}

export function removeItemFromCartAction(coffeeID: Coffee['id']){
    return{
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            coffeeID,
        },
    } satisfies Actions
}

export function incrementItemQuantityAction(coffeeID: Coffee['id']){
    return{
        type: ActionTypes.INCREMENT_ITEM_QUANTITY,
        payload: {
            coffeeID,
        },
    } satisfies Actions
}

export function decrementItemQuantityAction(coffeeID: Coffee['id']){
    return {
        type: ActionTypes.DECREMENT_ITEM_QUANTITY,
        payload: {
            coffeeID,
        },
    } satisfies Actions
}

export function checkoutCart(order: OrderData, callback: NavigateFunction){
    return{
        type: ActionTypes.CHECKOUT_CART,
        payload: {
            order,
            callback,
        },
    } satisfies Actions
}