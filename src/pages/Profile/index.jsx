import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
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

        <Input placeholder="Nome" type="text" required icon={FiUser}/>
        <Input placeholder="E-mail" type="email" required icon={FiMail}/>
        <Input placeholder="Senha atual" type="password" required icon={FiLock}/>
        <Input placeholder="Nova senha" type="password" required icon={FiLock}/>

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}