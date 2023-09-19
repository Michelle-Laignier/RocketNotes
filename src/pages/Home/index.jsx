import { FiPlus } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return(
    <Container>
			<Brand>
				<h1>Rocketnotes</h1>
			</Brand>

			<Header></Header>

			<Menu>
				<li><ButtonText title="Todos" $isActive/></li>
				<li><ButtonText title="Frontend" /></li>
				<li><ButtonText title="Node" /></li>
				<li><ButtonText title="React" /></li>
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