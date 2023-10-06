import { useContext } from 'react'
import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { myContext } from '../../myContext'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {

  const data = useContext(myContext) // (especificando qual pq pode ter mais de um contexto)
  console.log("MEU CONTEXTO =>", data );
  /* output:
    MEU CONTEXTO => {name: 'Michelle Laignier', email: 'michelle@email.com'}
      email: "michelle@email.com"
      name: "Michelle Laignier"
      [[Prototype]]: Object
  */

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" required icon={FiMail}/>
        <Input placeholder="Senha" type="password" required icon={FiLock}/>

        <Button title="Entrar" />
				<Link to="/register"> Criar conta</Link>
      </Form>

      <Img/>
    </Container>
  )
}