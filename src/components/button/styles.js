import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: 0;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: 500;
    height: 56px;
    margin-top: 16px;
    padding: 0 16px;
    width: 100%;

    &:disabled {
        opacity: 0.5;
    }
`

{/*
    Colocar o & dentro do Container, que é um button, quer dizer que
    tamo nos referindo ao button quando ele estiver desabilitado.
*/}