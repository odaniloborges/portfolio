import Avatar from '../../components/Avatar'
import { Paragraph } from '../../components/Paragraph'
import { Title } from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocarTema: () => void
}

const Sidebar = ({ trocarTema }: Props) => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Danilo Borges</Title>
        <Paragraph tipo="secundario" fontSize={16}>
          odaniloborges
        </Paragraph>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema onClick={trocarTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
