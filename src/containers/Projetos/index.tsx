import { Title } from '../../components/Title'
import Projeto from '../../components/Projeto'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projetos
