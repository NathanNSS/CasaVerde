import styled from 'styled-components'
import { theme } from '../../../../styles/theme'


export const Container = styled.div`
    display: flex;
    margin: 0px 0px 0px 15px;
    align-items:center ;
    font-family: ${theme.fonts.montserrat};
`

export const CampTexto = styled.input`
    height: 40px;
    width: 70px;
    border: transparent solid 1px;
    border-radius: 5px;
    color: ${theme.colors.text} solid 1px;
    font-family: ${theme.fonts.montserrat};
    background-color: #e4e4e4;
    padding: 0px 5px;
    margin: 0px 0px 0px 10px;
    ::placeholder{
        color:#4c4d5e;
        font-weight: 700;
    }
    &:focus{
        outline-color: #bcbcbc;
    }
`