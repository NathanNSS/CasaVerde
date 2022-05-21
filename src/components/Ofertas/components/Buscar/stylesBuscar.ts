import styled from 'styled-components'
import { theme } from '../../../../styles/theme'


export const Container = styled.div`
 
  align-items: center;
  background-color: #e4e4e4;
  border-radius: 5px;
  display: flex;
  gap: 18px;
  height: 42px;
  justify-content: space-between;
  padding: 0 15px;
  margin-right: 10px;
  width: 700px;
  

  input {
    background-color: #e4e4e4;
    border: none;
    font-size: 1.5rem;
    font-family: ${theme.fonts.montserrat};
    font-weight: 700;
    color: ${theme.colors.text};
    outline: none;
    width: 100%;
    ::placeholder {
      color: #4c4d5e;
    }
    
  }
`
