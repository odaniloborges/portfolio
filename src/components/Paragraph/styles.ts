import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: 14px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props) => props.theme.corPrincipal
      : (props) => props.theme.corSecundaria};
  line-height: 22px;
`
