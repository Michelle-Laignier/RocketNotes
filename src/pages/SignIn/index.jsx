import { useState } from 'react'

import { FiMail, FiLock} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Buttonb } from '../../components/Buttonb'

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password})
  }

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="email" required icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha" type="password" required icon={FiLock} onChange={e => setPassword(e.target.value)}/>

        <Buttonb title="Entrar" onClick={handleSignIn}/>
				<Link to="/register"> Criar conta</Link>
      </Form>

      <Img/>
    </Container>
  )
}