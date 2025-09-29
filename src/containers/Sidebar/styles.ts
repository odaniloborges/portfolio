import styled, { DefaultTheme } from 'styled-components'
import { Paragraph } from '../../components/Paragraph/styles'

export const Descricao = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => (props.theme as DefaultTheme).corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.theme as DefaultTheme).corDeFundoBotao};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 32px;
    text-align: center;
  }
`
