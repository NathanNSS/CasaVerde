import styled from "styled-components";
import { SubTitulo } from "../../pages/stylesHome";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin: 32px 0px;
`

export const ContainerIMG = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background-color: ${theme.colors.amarelo};
`
export const Texto = styled(SubTitulo)`
    margin-left: 16px;
`