import { useEffect, useState } from "react"
import { Bottao, Container, Conteudo, Imagem, Preco, Titulo } from "./stylesProduto";
import { IOfertas } from '../../index'

import planta1 from '../../../../assets/produto-01.png'
import planta2 from '../../../../assets/produto-02.png'
import planta3 from '../../../../assets/produto-03.png'
import planta4 from '../../../../assets/produto-04.png'
import planta5 from '../../../../assets/produto-05.png'
import planta6 from '../../../../assets/produto-06.png'
import planta7 from '../../../../assets/produto-07.png'
import Seta from '../../../../assets/icones/seta.svg'

interface IProduto {
    produto: IOfertas
}

export function Produto({ produto }: IProduto) {

    function matchImage(value: string) {
        switch (value) {
            case 'produto-01':
                return planta1
                break;
            case 'produto-02':
                return planta2
                break;
            case 'produto-03':
                return planta3
                break;
            case 'produto-04':
                return planta4
                break;
            case 'produto-05':
                return planta5
                break;
            case 'produto-06':
                return planta6
                break;
            case 'produto-07':
                return planta7
                break;

            default:
                return planta1
                break;
        }
    }

    return (
        <Container>

            <div style={{ width: '100%', display: "block" }}>
                <Imagem src={matchImage(produto.img)} alt={produto.name} />
            </div>
            <Conteudo>
                <Titulo>{produto.name}</Titulo>
                <Preco>{'R$ ' + produto.preco.toFixed(2)}</Preco>
                <Bottao href="#">Comprar   <img src={Seta} /></Bottao>
            </Conteudo>
        </Container>
    )
}