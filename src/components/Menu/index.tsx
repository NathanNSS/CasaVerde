import {Nav, Lista, ItemLista, Separador} from './stylesMenu';
import Logo from '../../assets/logo.svg'

export default function Menu() {
    
    const itemMenu = [
        {
            name: 'Como fazer',
            to: "#"
        },
        {
            name: 'Ofertas',
            to: "#"
        },
        {
            name: 'Depoimentos',
            to: "#"
        },
        {
            name: 'Vídeos',
            to: "#"
        },
        {
            name: 'Meu Carrinho',
            to: "#"
        }
    ]

    function SeparadorComp() {
        return (
            <Separador>
                /
            </Separador>
        )
    }

    return (
        <header >
            <Nav>
                <img src={Logo} alt="logo da página" />
                <Lista style={{ display: 'flex', flexDirection: 'row'}}>
                    {
                        itemMenu.map((item, index) => (
                            <li key={index}>
                                <ItemLista href={item.to}>
                                    {item.name}
                                    {
                                        item.name === 'Meu Carrinho' ?
                                            ` `
                                            :
                                            <SeparadorComp />
                                    }
                                </ItemLista>
                            </li>
                        ))
                    }

                </Lista>
            </Nav>
        </header>
    )
}
