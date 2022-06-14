import { theme } from "../styles/theme";
import styled from "styled-components";


export const CaixaTexto = styled.div`


@media(min-width:1900px){
    width: 585px;
}
`

export const SubTitulo = styled.h3`
    font-size: 22px;
    font-family: ${theme.fonts.montserrat};
    color: ${theme.colors.text};
    opacity: 0.5;
`

export const Titulo = styled.h1`
    font-size: 82px;
    font-family: ${theme.fonts.elsie};
    color: ${theme.colors.text};
`

export const Texto = styled.p`
    width: 481px;
    font-size: 16px;
    font-family: ${theme.fonts.montserrat};
    color: ${theme.colors.text};
    line-height: 26px;
    opacity: 0.5;
    margin: 30px 0px;
`
export const Hero = styled.img`
    position: absolute;
    right: 400px;
    top:-30px;
    z-index: -1 !important;
`
export const ContainerInstrucao = styled.div`
    @media(min-width:1900px){
        width: 995px;
        margin: auto;
        z-index: 1;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
    z-index: 1;
`

export const ConteudoInstrucao = styled.div`
    width: 100%;
    z-index: 100;
    padding:50px 32px 0px 32px;
`

export const TituloInstrucao = styled(Titulo)`
    font-size: 42px;
    margin-top: 12px;
`