import { Paragraph as ParagraphEstilo } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

export const Paragraph = ({ tipo = 'principal', children }: Props) => (
  <ParagraphEstilo tipo={tipo}>{children}</ParagraphEstilo>
)
