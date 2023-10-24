import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'

import { api } from '../../services/api'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Buttonb } from '../../components/Buttonb'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  const [name, setName] = useState("") // (""): valor inicial vazio pq de início não tem nada
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // [valor atual do estado , função pra atualizar o estado, que tem que começar com set]

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    // se der certo ou se der erro do email já estar cadastrado ou etc
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar")
        }
      })
  }

  /* pra ver oque tem dentro de cada variável:
  function handleSignUp() {
    console.log(name, email, password);
  }*/
 
  return(
    <Container>
      <Img/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" required icon={FiUser} onChange={e => setName(e.target.value)} />
        <Input placeholder="E-mail" type="email" required icon={FiMail} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Senha" type="password" required icon={FiLock} onChange={e => setPassword(e.target.value)} />

        <Buttonb title="Cadastrar" onClick={handleSignUp} />
				<ButtonText title="Voltar para o login" onClick={handleBack}></ButtonText>
      </Form>
    </Container>
  )
}

// função onChange: toda vez que o valor do input muda, ela dispara o evento