import styled from 'styled-components';
import { MdOutlineEmail } from 'react-icons/md'
import { theme } from '../../styles/theme';

interface ButtonEmail{
    valido: boolean;
}

export const Container = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 585px;
    height: 75px;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`

export const IconEmail = styled(MdOutlineEmail)`
    margin: 0px 10px;
    height: 100%;
`

export const InputEmail = styled.input`
    border: none;
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: ${theme.colors.text};
    padding: 0px 5px;
    &:focus{
        outline-color: #bcbcbc;
    }
`

export const BtnEmail = styled.button<ButtonEmail>`
    border: none;
    width: 320px;
    height: 100%;
    font-size: 1rem;
    font-family: ${theme.fonts.montserrat};
    text-decoration: underline;
    color: #FFFFFF;
    cursor: ${props => props.valido ? "pointer" : "not-allowed" };
    background-color: ${props => props.valido ? theme.colors.amarelo : "#D10000"};
`
