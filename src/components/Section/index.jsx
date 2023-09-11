import { Container } from './styles'

export function Section({ title, children }) {
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

{/*
    <h2>{title}</h2>
    title sendo renderizado dentro do h2

    {children} pq vamos ter a mesma estrutura mas conteúdo diferente, por página.
    O children vai capturar tudo o que tá dentro da Section (index da Details).
*/}