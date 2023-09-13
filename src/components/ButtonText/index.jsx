import { Container } from './styles'

export function ButtonText({ title, $isActive = false, ...rest }) {
    return(
        <Container
            type='button'
            $isActive={$isActive}
            {...rest}
        >
            {title}
        </Container>
    )
}

{/*
$isActive={$isActive}
pro $ não dar erro, faz isso:
https://styled-components.com/docs/api#transient-props
*/}