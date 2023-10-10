import { useState } from 'react'
import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState("") // (""): valor inicial vazio pq de início não tem nada
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // [valor atual do estado , função pra atualizar o estado, que tem que começar com set]

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    // se der certo ou se der erro do email já estar cadastrado ou etc
    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/login")
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

        <Button title="Cadastrar" onClick={handleSignUp} />
				<Link to="/login"> Voltar para o login</Link>
      </Form>
    </Container>
  )
}

// função onChange: toda vez que o valor do input muda, ela dispara o evento