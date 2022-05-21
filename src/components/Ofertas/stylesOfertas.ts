import styled from 'styled-components'
import { theme } from '../../styles/theme'
export const Container = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    margin: 40px 0px;
`
export const SubTitle = styled.h3`
    font-family: ${theme.fonts.montserrat};
    font-size: 22px;
    color: ${theme.colors.text};
    opacity: 0.5;
`
export const Title = styled.h1`
    font-family: ${theme.fonts.elsie};
    font-size: 82px;
    color: ${theme.colors.text};
    margin-top: 10px;
    `

export const Produtos = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: flex-start;  
    width: 100%;
    justify-content: center;
    margin: 15px 0px;
    gap: 30px;
    @media(min-width: 800px){
        min-height: 500px;
    }
`
export const ContainerFiltro = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content:space-between;
    margin: 35px 0px 100px 0px 
`