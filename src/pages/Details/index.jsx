import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container, Links, Content } from "./styles"

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  async function deleteNote() {
    const isOk = confirm("Excluir a nota?")
    if(isOk) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header/>

      { 
        data &&
        <main>
          <Content>
            <ButtonText title="Excluir a nota" onClick={deleteNote}/>

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}><a href={link.url} target="_blank">{link.url}</a></li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))
                }
              </Section>
            }
            
            <Button title="Voltar" onClick={handleBack}/>
          </Content>
        </main>
      }
    </Container>
  )
}

{/*
    <Button title="" />
    <Button name="" />
    <Button label="" />
    os 3 funcionam da mesma forma

    O children vai capturar tudo o que tá dentro da Section.
*/}