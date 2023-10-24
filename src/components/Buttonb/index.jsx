import { Container } from "./styles"

export function Buttonb({ title, loading = false, ...rest }) {
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