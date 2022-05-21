import { CaixaTexto, ContainerInstrucao, ConteudoInstrucao, Hero, SubTitulo, Texto, Titulo, TituloInstrucao } from "./stylesHome";

import Menu from "../components/Menu";
import AssinaturaNewsletter from "../components/Newsletter";
import Ofertas from "../components/Ofertas";
import Item from "../components/Item";

import HeroIMG from '../assets/hero-image.png'
import InstrucaoIMG from '../assets/img-instrucao.png'
import Mouse from '../assets/icones/mouse.svg'
import Cart from '../assets/icones/cart.svg'
import Truck from '../assets/icones/truck.svg'

export default function App() {
    return (
        <>
            <main >
                <Menu />
                <CaixaTexto>
                    <SubTitulo>Sua casa com as</SubTitulo>
                    <Titulo>Melhores Plantas</Titulo>
                    <Texto>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                        Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </Texto>
                    <AssinaturaNewsletter />
                </CaixaTexto>
                <div style={{display:"inline-block", width:'100%', margin:"150px 0px" }}>
                    <Hero src={HeroIMG} alt="Imagem de Planta"/>
                </div>
                <ContainerInstrucao>
                    <img src={InstrucaoIMG} alt="Imagem de Planta" />
                    <ConteudoInstrucao>
                        <SubTitulo>Como Consegui</SubTitulo>
                        <TituloInstrucao>minha planta</TituloInstrucao>
                        <Item texto="Escolha suas plantas" urlImage={Mouse}/>
                        <Item texto="Faça seu pedido" urlImage={Cart}/>
                        <Item texto="Aguarde na sua casa" urlImage={Truck}/>
                    </ConteudoInstrucao>
                </ContainerInstrucao>
                <Ofertas />
            </main>
        </>
    )
}
