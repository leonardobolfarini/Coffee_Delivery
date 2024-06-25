import { HeaderStyle } from "./styles";
import CoffeeLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContextProvider";

export function Header(){

    const { cart } = useContext(CartContext)

    return(
        <HeaderStyle>
            <span>
                <img src={CoffeeLogo} />
            </span>
            <div>
                <div>
                    <MapPin size={20} weight="fill"/>
                    Porto Alegre, RS
                </div>
                <NavLink to='/checkout' title="Pagamento">
                    <nav>
                        <ShoppingCart size={22} weight="fill"/>
                        {cart.length > 0 ? <span>{cart.length}</span> : null}
                    </nav>
                </NavLink>
            </div>
        </HeaderStyle>
    )
}