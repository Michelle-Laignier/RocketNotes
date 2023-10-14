import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
	const [tags, setTags] = useState([])
	const [tagsSelected, setTagsSelected] = useState([])

	function handleTagSelected(tagName) {
		const alreadySelected = tagsSelected.includes(tagName)

		if(alreadySelected) {
			const filteredTags = tagsSelected.filter(tag => tag !== tagName)
			setTagsSelected(filteredTags)
		} else {
			setTagsSelected(prevStateTag => [...prevStateTag, tagName])
		}
	}

	useEffect(() => {
		async function fetchTags() {
			const response = await api.get("/tags")
			setTags(response.data)
		}

		fetchTags()
	}, [])

  return(
    <Container>
			<Brand>
				<h1>Rocketnotes</h1>
			</Brand>

			<Header></Header>

			<Menu>
				<li><ButtonText title="Todos" onClick={() => handleTagSelected("all")} $isActive={tagsSelected.length === 0}/></li>
				{
					tags && tags.map(tag => (
						<li key={String(tag.id)}>
							<ButtonText title={tag.name} onClick={() => handleTagSelected(tag.name)} $isActive={tagsSelected.includes(tag.name)}/>
							</li>
					))
				}
			</Menu>

			<Search>
				<Input placeholder="Pesquisar pelo título" />
			</Search>

			<Content>
				<Section title="Minhas notas">
					<Link to="/details/:01">
						<Note data={{
							title: 'React Modal', 
							tags: [
								{id: '1', name: 'React'}
							]
						}}
						/>
					</Link>

					<Link to="/details/:02">
						<Note data={{
							title: 'Exemplo de Middleware', 
							tags: [
								{id: '1', name: 'express'},
								{id: '2', name: 'nodejs'}
							]
						}}
						/>
					</Link>
				</Section>
			</Content>

			<NewNote to="/new">
				<FiPlus/>
				Criar nota
			</NewNote>
    </Container>
  )
}