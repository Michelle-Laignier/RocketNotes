import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea} from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Buttonb } from '../../components/Buttonb'
import { ButtonText } from '../../components/ButtonText'

export function New() {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")

	// Pra guardar todos os links:
	const [links, setLinks] = useState([])
	// Pra guardar o novo link que vai ser adicionado:
	const [newLink, setNewLink] = useState("")

	const [tags, setTags] = useState([])
	const [newTag, setNewTag] = useState("")

	const navigate = useNavigate()

	function handleAddLink() {
		if(!newLink) {
			return
		}

		if(newLink.length > 0 && !newLink.includes("http")) {
			return alert("Adicione um link válido. Exemplo: http://site_de_exemplo.com")
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

		if(newTag.length > 0 && tags.includes(newTag)) {
			return alert(`O marcador ${newTag} já existe.`)
		}

		setTags(prevState => [...prevState, newTag])
		setNewTag("")
	}

	function handleRemoveTag(deletedTag) {
		const isOk = confirm("Remover esse marcador?")
		if(isOk) {
			setTags(prevState => prevState.filter(tag => tag !== deletedTag))
		}
	}

	async function handleNewNote() {
		if(newLink.length > 0 && !links.includes(newLink)) {
			return alert("Clique no + para salvar o link.")
		} else if(newTag.length > 0 && !tags.includes(newTag)) {
			return alert("Clique no + para salvar o marcador.")
		}

		if(!title || links.length === 0 || tags.length === 0) {
			return alert(`É obrigatório: Título, link (mínimo 1) e marcador (mínimo 1)`)
		}

		await api.post("/notes", {
			title,
			description,
			tags,
			links
		})

		alert("Nota criada com sucesso! :D")
		navigate(-1)
	}

	function handleBack() {
		navigate(-1)
	}

  return(
    <Container>
      <Header/>

      <main>
        <Form>
					<header>
						<h1>Criar nota</h1>
						<ButtonText title="voltar" type='button' onClick={handleBack}></ButtonText>
					</header>

					<Input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)}/>
					<TextArea placeholder="Observações" value={description} onChange={e => setDescription(e.target.value)}/>

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

					<Buttonb title="Salvar" onClick={handleNewNote}/>
				</Form>
      </main>
    </Container>
  )
}