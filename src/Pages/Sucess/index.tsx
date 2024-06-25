import { Container, Infos, ShippingInfos, Info } from "./styles";
import DriverImage from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";
import { useParams } from "react-router-dom";
export function Success(){
    const { orders } = useContext(CartContext)
    const { orderId } = useParams()

    const orderInfos = orders.find((order) => order.id === Number(orderId))

    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    }

    if (!orderInfos?.id){
        return null
    }

    return(
        <Container>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </div>
            <ShippingInfos>
                <Infos>
                    <div>
                        <Info presetcolors="purple">
                            <span>
                                <MapPin weight="fill"/>
                            </span>
                            <div>
                                <p>
                                    Entrega em
                                    <strong> {orderInfos.street}, {orderInfos.number}</strong>
                                </p>
                                <span>
                                    {orderInfos.neighborhood} - {orderInfos.city}, {orderInfos.state}
                                </span>
                            </div>
                        </Info>
                        <Info presetcolors="yellow" >
                            <span>
                                <Timer />
                            </span>
                            <div>
                                <p>Previsão de entrega</p>

                                <span>
                                    <strong>20 min - 30 min</strong>
                                </span>
                            </div>
                        </Info>
                        <Info presetcolors="dark_yellow">
                            <span>
                                <CurrencyDollar />
                            </span>
                            <div>
                                <p>Pagamento na entrega</p>

                                <span>
                                    <strong>{paymentMethod[orderInfos.paymentMethod]}</strong>
                                </span>
                            </div>
                        </Info>
                    </div>
                </Infos>
                <img src={DriverImage} />
            </ShippingInfos>
        </Container>
    )
}