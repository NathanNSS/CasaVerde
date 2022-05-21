import styled from 'styled-components';
import { theme } from '../../styles/theme';

import "/src/styles/theme.module.css";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 150px;
`
export const Lista = styled.ul`
    list-style: none;
`

export const ItemLista = styled.a`
    text-decoration: none;
    font-size: 16px;
    font-family: ${theme.fonts.montserrat};
    color:${theme.colors.text}    
`

export const Separador = styled.span`
    margin: 0px 10px;
`