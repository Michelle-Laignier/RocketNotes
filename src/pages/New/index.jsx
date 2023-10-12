import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea} from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
	// Pra guardar todos os links:
	const [links, setLinks] = useState([])
	// Pra guardar o novo link que vai ser adicionado:
	const [newLink, setNewLink] = useState("")

	function handleAddLink() {
		if(!newLink) {
			return
		}

		// Pode ser qualquer nome no lugar de prevState
		setLinks(prevState => [...prevState, newLink]) // imutabilidade
		// setLinks(newLink) assim vai ficar só o link mais recente

		setNewLink("") // Pra ter o estado "resetado" de novo
	}

  return(
    <Container>
      <Header/>

      <main>
        <Form>
					<header>
						<h1>Criar nota</h1>
						<Link to="/">voltar</Link>
					</header>

					<Input placeholder="Título"/>
					<TextArea placeholder="Observações"/>

					<Section title="Links úteis">
						{
							links.map((link, index) => ( // index é a posição do elemento na lista
								<NoteItem
								  key={String(index)} // Sempre que tem um componente renderizado por uma lista, precisa da propriedade key
									value={link} // Pegar o valor de cada link
									onClick={() => {}}
								/>
							))
						}
						<NoteItem isNew placeholder="Novo link" value={newLink} onChange={e => setNewLink(e.target.value)} onClick={handleAddLink}/>
					</Section>

					<Section title="Marcadores" className='marcadores'>
						<div className='tags' >
							<NoteItem value="React"/>
							<NoteItem isNew placeholder="Novo marcador"/>
						</div>
					</Section>

					<Button title="Salvar"/>
				</Form>
      </main>
    </Container>
  )
}