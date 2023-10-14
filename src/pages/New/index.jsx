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

	const [tags, setTags] = useState([])
	const [newTag, setNewTag] = useState("")

	function handleAddLink() {
		if(!newLink) {
			return
		}

		// Pode ser qualquer nome no lugar de prevState
		setLinks(prevState => [...prevState, newLink]) // imutabilidade
		// setLinks(newLink) assim vai ficar só o link mais recente

		// (prevState => [...prevState, newLink])
		// sem o spread operator fica uma lista dentro de outra lista
		// ["react", "nodejs"] => [ ["react", "nodejs"], "express"]

		setNewLink("") // Pra ter o estado "resetado" de novo
	}

	function handleRemoveLink(deletedLink) {
		const isOk = confirm("Remover esse link?")
		if(isOk) {
			setLinks(prevState => prevState.filter(link => link !== deletedLink)) // todos os links menos oque to deletando
		}
	}
	
	function handleAddTag() {
		if(!newTag) {
			return
		}

		setTags(prevState => [...prevState, newTag])
		setNewTag("")
	}

	function handleRemoveTag(deletedTag) {
		const isOk = confirm("Remover essa tag?")
		if(isOk) {
			setTags(prevState => prevState.filter(tag => tag !== deletedTag))
		}
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
									onClick={() => handleRemoveLink(link)}
									// Quando quiser passar -parâmetros- tem que usar essa estrutura {() => {}} em vez de só {nome_da_função}
									// Se fizer com {nome_da_função(parâmetro)} ele fica tentando executar automático
								/>
							))
						}
						<NoteItem isNew placeholder="Novo link" value={newLink} onChange={e => setNewLink(e.target.value)} onClick={handleAddLink}/>
					</Section>

					<Section title="Marcadores" className='marcadores'>
						<div className='tags' >
							{
							tags.map((tag, index) => ( // index é a posição do elemento na lista
								<NoteItem
								  key={String(index)}
									value={tag}
									onClick={() => handleRemoveTag(tag)}
								/>
							))
						}
							<NoteItem isNew placeholder="Novo marcador" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag}/>
						</div>
					</Section>

					<Button title="Salvar"/>
				</Form>
      </main>
    </Container>
  )
}