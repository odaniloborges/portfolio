import { Paragraph as ParagraphEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const Paragraph = ({
  tipo = 'principal',
  children,
  fontSize
}: Props) => (
  <ParagraphEstilo fontSize={fontSize} tipo={tipo}>
    {children}
  </ParagraphEstilo>
)
