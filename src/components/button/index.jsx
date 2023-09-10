import { Container } from "./styles"

{/*Pra recuperar uma propriedade passada: (props)*/}
export function Button({ title, loading = false, ...rest }) {
    return (
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}
{/* dentro do botão: crtl + space mostras todas as propriedades do botão*/}