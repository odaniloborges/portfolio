import { Paragraph } from '../../components/Paragraph'
import { Title } from '../../components/Title'
import GithubSecao from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, architecto
      quam perferendis quo alias enim officia dolore voluptate dicta natus
      similique! Minus praesentium obcaecati laborum, ad doloribus dolore
      voluptatem. Consectetur!
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=odaniloborges&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=odaniloborges&layout=compact&langs_count=7&card_width=400&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
