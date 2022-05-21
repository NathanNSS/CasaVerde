import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

interface IOrdenador {
    aberto: boolean
}

export const Container = styled.button<IOrdenador>`
    display: flex;
    height: 40px;
    min-width: 240px;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    background-color:${props => props.aberto ? "#213E26" : "#e4e4e4"};;
    color:${props => props.aberto && "#e4e4e4"};
    border: none;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;
`

export const Options = styled.div<IOrdenador>`
    display: ${props => props.aberto ? 'flex' : 'none'};;
    position: absolute;
    left: 0;
    flex-direction: column;
    top: 100%;
    width: 100%;
`

export const Option = styled.div`
    align-items: center;
    background-color: #e4e4e4;
    border-top: 2px solid #f6f6f6;
    box-sizing: border-box;
    color: #4c4d5e;
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
    &:hover{
        background-color: #295c32;
        color: white;
    }
`
export const Opt = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`

