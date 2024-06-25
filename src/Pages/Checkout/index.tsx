import { AdressContainer, AdressForm, AdressHeader, CartCheckoutButton, CartTotal, CartTotalPrice,
CoffeeBox, Container, InfoContainer, PaymentMethodContainer, PaymentMethodHeader, PaymentMethodOptions,
QuantityAndRemoveItensContainer } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money, Trash } from '@phosphor-icons/react'
import { TextInput } from "./components/TextInput";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form'
import { PaymentRadioOption } from "./components/PaymentRadioOption";
import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { coffees } from '../../../coffees.json'
import { ToAddQuantity } from "../../components/ToAddQuantity";

type FormInputs = {
    cep: number
    street: string
    number: string
    additionalAdress: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = zod.object({
    cep: zod.number({
        required_error: "CEP é obrigatório.",
        invalid_type_error: "CEP deve ser um número."
    }),
    street: zod.string().min(1, 'Informe a rua.'),
    number: zod.string().min(1, 'Informe o número.'),
    additionalAdress: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Informe o bairro.'),
    city: zod.string().min(1, 'Informe a cidade.'),
    state: zod.string().min(1, 'Informe o estado.'),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
        required_error: 'É necessário selecionar uma forma de pagamento.'
    })
}) 

export type OrderData = zod.infer<typeof newOrder>


export function Checkout(){

    const { register, watch, handleSubmit, formState: {errors} } = useForm<FormInputs>({
        resolver: zodResolver(newOrder),
    })

    const selectedPaymentMethod = watch('paymentMethod')

    const { checkoutOrder, incrementItemQuantity, decrementItemQuantity, removeItemFromCart, cart } = useContext(CartContext)
    
    const coffeesInCart = cart.map((item) => {
        const coffeeProps = coffees.find((coffe =>
            coffe.id === item.id
        ))

        if (!coffeeProps){
            throw new Error('Café invalido')
        }

        return {
            ...coffeeProps,
            quantity: item.quantity,
        }
    })

    const coffeesInCartAndValue = coffeesInCart.map((coffee) => {
        let value = coffee.price
        if (coffee.quantity > 1){
            value = coffee.price * coffee.quantity
        }


        return{
            ...coffee,
            itemTotalValue: value
        }
    })

    const totalValue = coffeesInCartAndValue.reduce((prevValue, currItem) => {
        return (prevValue + currItem.price * currItem.quantity)
    }, 0)

    function handleIncrementItemQuantity(itemID: string){
        incrementItemQuantity(itemID)
    }

    function handleDecrementItemQuantity(itemID: string){
        decrementItemQuantity(itemID)
    }

    function handleRemoveItemFromCart(itemID: string){
        removeItemFromCart(itemID)
    }

    const handleCheckoutOrder: SubmitHandler<FormInputs> = (data) => {
        if (cart.length === 0){
            return alert('Você não tem itens no carrinho!')
        }

        checkoutOrder(data)
    }

    return(
        <Container>
            <InfoContainer>
                <h1>Complete seu pedido</h1>

                <form id='order' onSubmit={handleSubmit(handleCheckoutOrder)}>
                    <AdressContainer>
                        <AdressHeader>
                            <MapPinLine size={22} />
                            <div>
                                <span>Endereço de entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </AdressHeader>

                        <AdressForm>
                            <TextInput
                                type="number"
                                placeholder="CEP"
                                containerProps={{style: {gridArea: 'cep'}}}
                                error={errors.cep}
                                {...register('cep', { valueAsNumber: true})}
                            />
                            <TextInput
                                type="text"
                                placeholder="Rua"
                                containerProps={{style: {gridArea: 'street'}}}
                                error={errors.street}
                                {...register('street')}
                            />
                            <TextInput
                                type="text"
                                placeholder="Número"
                                containerProps={{style: {gridArea: 'number'}}}
                                error={errors.number}
                                {...register('number')}
                            />
                            <TextInput 
                                type="text"
                                placeholder="Complemento"
                                optional
                                containerProps={{style: {gridArea: 'additionalAdress'}}}
                                error={errors.additionalAdress}
                                {...register('additionalAdress')}
                            />
                            <TextInput
                                type="text" 
                                placeholder="Bairro"
                                containerProps={{style: {gridArea: 'neighborhood'}}}
                                error={errors.neighborhood}
                                {...register('neighborhood')}
                            />
                            <TextInput
                                type="text" 
                                placeholder="Cidade"
                                containerProps={{style: {gridArea: 'city'}}}
                                error={errors.city}
                                {...register('city')}
                            />
                            <TextInput
                                type="text" 
                                placeholder="UF"
                                containerProps={{style: {gridArea: 'state'}}}
                                error={errors.state}
                                {...register('state')}
                                />
                        </AdressForm>
                    </AdressContainer>
                    
                    <PaymentMethodContainer>
                        <PaymentMethodHeader>
                            <CurrencyDollar size={22} />
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentMethodHeader>

                        <PaymentMethodOptions>
                            <div>
                                <PaymentRadioOption
                                    isSelected={selectedPaymentMethod === 'credit'}
                                    {...register('paymentMethod')}
                                    value='credit'
                                >
                                    <CreditCard size={16}/>
                                    <span>Cartão de crédito</span>
                                </PaymentRadioOption>

                                <PaymentRadioOption
                                    isSelected={selectedPaymentMethod === 'debit'}
                                    {...register('paymentMethod')}
                                    value='debit'
                                >

                                    <Bank size={16}/>
                                    <span>Cartão de débito</span>
                                </PaymentRadioOption>

                                <PaymentRadioOption
                                    isSelected={selectedPaymentMethod === 'cash'}
                                    {...register('paymentMethod')}
                                    value='cash'
                                >
                                    <Money size={16}/>
                                    <span>Dinheiro</span>
                                </PaymentRadioOption>
                            </div>

                        </PaymentMethodOptions>
                    </PaymentMethodContainer>
                </form>
            </InfoContainer>

            <InfoContainer>
                <h1>Cafés selecionados</h1>
                <CartTotal>
                    {coffeesInCartAndValue.map((coffee) => (
                        <Fragment key={coffee.id}>
                            <CoffeeBox>
                                <div>
                                    <img src={coffee.image} alt={coffee.name}/>
                                    <div>
                                        <span>{coffee.name}</span>

                                        <QuantityAndRemoveItensContainer>
                                            <ToAddQuantity 
                                                quantity={coffee.quantity}
                                                incrementQuantity={() => handleIncrementItemQuantity(coffee.id)}
                                                decrementQuantity={() => handleDecrementItemQuantity(coffee.id)}
                                            />
                                            
                                            <button onClick={ () => handleRemoveItemFromCart(coffee.id)}>
                                                <Trash />
                                                <span>Remover</span>
                                            </button>
                                        </QuantityAndRemoveItensContainer>
                                    </div>
                                </div>
                                
                                <aside>R$ {coffee.itemTotalValue.toFixed(2)}</aside>
                            </CoffeeBox>
                        </Fragment>
                    ))}

                    <CartTotalPrice>
                        <div>
                            <span>Total de itens</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency'
                                }).format(totalValue)}
                            </span>
                        </div>

                        <div>
                            <span>Entrega</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency'
                                }).format(3.5)}
                            </span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency'
                                }).format(totalValue + 3.5)}
                            </span>
                        </div>
                    </CartTotalPrice>
                    <CartCheckoutButton type="submit" form="order">
                        Finalizar pedido
                    </CartCheckoutButton>
                </CartTotal>
            </InfoContainer>
        </Container>
    )
}