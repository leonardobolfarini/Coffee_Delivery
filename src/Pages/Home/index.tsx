import { CoffeeList, HomeContainer, IntroContainer, ItensContainer, ItensStyle } from "./styles";
import CoffeeImage from '../../assets/Imagem.svg'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import { coffees } from '../../../coffees.json'
import { CoffeeCard } from "./CoffeeCard";

export function Home() {
    return(
        <HomeContainer>
            <IntroContainer>
                <div>
                     <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                     <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
                     <div>
                        <ItensContainer>
                            <ItensStyle presetcolors={"dark_yellow"}>
                                <span>
                                    <ShoppingCart size={16} weight="fill"/>
                                </span>
                                Compra simples e segura
                            </ItensStyle>
                            <ItensStyle presetcolors={"light_black"}>
                                <span>
                                    <Package size={16} weight="fill"/>
                                </span>
                                Embalagem mantém o café intacto
                            </ItensStyle>
                        </ItensContainer>
                        <ItensContainer>
                            <ItensStyle presetcolors={"yellow"}>
                                <span>
                                    <Timer size={16} weight="fill"/>
                                </span>
                                Entrega rápida e rastreada
                            </ItensStyle>
                            <ItensStyle presetcolors={"purple"}>
                                <span>
                                    <Coffee size={16} weight="fill"/>
                                </span>
                                O café chega fresquinho até você
                            </ItensStyle>
                        </ItensContainer>
                     </div>
                </div>
                <span>
                    <img src={CoffeeImage} />
                </span> 
            </IntroContainer>
            <CoffeeList>
                <h1>Nossos cafés</h1>
                <div>
                    {coffees.map((coffee) => (
                        <CoffeeCard key={coffee.id} coffee={coffee}/>
                    ))}
                </div>
            </CoffeeList>
        </HomeContainer>
    )
}