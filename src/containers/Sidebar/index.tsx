import Avatar from '../../components/Avatar'
import { Paragraph } from '../../components/Paragraph'
import { Title } from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
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
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  </>
)

export default Sidebar
