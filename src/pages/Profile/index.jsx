import { useState } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth"

import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
	// pegar do estado qual o valor do usuário autenticado armazenado no contexto:
	const { user } = useAuth()

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [passwordOld, setPasswordOld] = useState()
	const [passwordNew, setPasswordNew] = useState()
	// password fica vazio por questão de segurança, se fulano quiser mudar, digita as 2.

  return(
    <Container>
			<header>
				<Link to="/">
					<FiArrowLeft/>
				</Link>
			</header>

      <Form>
				<Avatar>
					<img src="https://github.com/Michelle-Laignier.png" alt="Foto do usuário" />

					<label htmlFor="avatar">
						<FiCamera/>
						<input id="avatar" type="file" />
					</label>
				</Avatar>

        <Input placeholder="Nome" type="text" required icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input placeholder="E-mail" type="email" required icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha atual" type="password" required icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
        <Input placeholder="Nova senha" type="password" required icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}