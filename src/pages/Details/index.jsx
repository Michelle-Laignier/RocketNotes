import { Container } from "./styles"

import { Button } from '../../components/button'

export function Details() {
    return (
        <Container>
            <h1>Hello World!</h1>
            <span>Yey</span>
            <Button title="Entrar" loading/>
            <Button title="Cadastrar"/>
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