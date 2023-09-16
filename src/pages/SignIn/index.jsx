import { FiMail, FiLock} from 'react-icons/fi'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" required icon={FiMail}/>
        <Input placeholder="Senha" type="password" required icon={FiLock}/>

        <Button title="Entrar" />
				<a href="#"> Criar conta</a>
      </Form>

      <Img/>
    </Container>
  )
}