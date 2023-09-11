import { Container, Links } from "./styles"

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details() {
    return (
        <Container>
            <Header/>

            <Section title="Links úteis">
                <Links>
                    <li>
                        <a href="#" target="_blank">https://www.rocketseat.com.br/</a>
                    </li>

                    <li>
                        <a href="#">https://www.rocketseat.com.br/</a>
                    </li>
                </Links>
            </Section>

            <Button title="Voltar"/>
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