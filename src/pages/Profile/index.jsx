import { useState } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { useAuth } from "../../hooks/auth"

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
	// pegar do estado qual o valor do usuário autenticado armazenado no contexto:
	const { user, updateProfile } = useAuth()

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [passwordOld, setPasswordOld] = useState()
	const [passwordNew, setPasswordNew] = useState()
	// password fica vazio por questão de segurança, se fulano quiser mudar, digita as 2.

	const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
	const [avatar, setAvatar] = useState(avatarUrl) // img do user, se já existir
	const [avatarFile, setAvatarFile] = useState(null) // img nova que o user fizer upload
	
	async function handleUpdate() {
		// await updateProfile({}) precisamos mandar as informações num objeto chamado user:
		const user = {
			name,
			email,
			password: passwordNew,
			old_password: passwordOld
		}

		await updateProfile({ user, avatarFile })
	}

	function handleChangeAvatar(event) { // evento de alteração do avatar
		// Guardar a img selecionada:
		const file = event.target.files[0] // [0] é o primeiro arq enviado, pra garantir q só vai ter 1
		setAvatarFile(file)

		// Exibir a img:
		const imagePreview = URL.createObjectURL(file)
		setAvatar(imagePreview)
	}

  return(
    <Container>
			<header>
				<Link to="/">
					<FiArrowLeft/>
				</Link>
			</header>

      <Form>
				<Avatar>
					<img src={avatar} alt="Foto do usuário" />

					<label htmlFor="avatar">
						<FiCamera/>
						<input id="avatar" type="file" onChange={handleChangeAvatar}/>
					</label>
				</Avatar>

        <Input placeholder="Nome" type="text" required icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
        <Input placeholder="E-mail" type="email" required icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
        <Input placeholder="Senha atual" type="password" required icon={FiLock} onChange={e => setPasswordOld(e.target.value)}/>
        <Input placeholder="Nova senha" type="password" required icon={FiLock} onChange={e => setPasswordNew(e.target.value)}/>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}