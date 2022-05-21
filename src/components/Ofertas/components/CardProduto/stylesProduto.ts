import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

const pai = '200px'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 380px;
    height: ${pai};
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
`
export const Imagem = styled.img`
    display: block;
    position: absolute ;
    height: ${pai};
`
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    text-align: start;
    justify-content: space-evenly;
    z-index: 1;
`

export const Titulo = styled.h3`
    font-family: ${theme.fonts.elsie};
    font-size: 32px;
    color: ${theme.colors.text};
`

export const Preco = styled.span`
    font-family: ${theme.fonts.montserrat};
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.text};
    opacity: 0.5;
`

export const Bottao = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    font-family: ${theme.fonts.montserrat};
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.amarelo};
    align-items: center;
    & img{
        margin-left: 5px;
    }
`