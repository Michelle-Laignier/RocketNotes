import { Container } from "./styles"

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details() {
    return (
        <Container>
            <Header/>
            <Button title="Voltar"/>
        </Container>
    )
}

{/*
    <Button title="" />
    <Button name="" />
    <Button label="" />
    os 3 funcionam da mesma forma
*/}