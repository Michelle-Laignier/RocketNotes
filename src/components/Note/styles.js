import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 112px;
    justify-content: center;
    padding-left: 22px;
    width: 100%;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 700;
        text-align: left;
    }

    > footer {
        display: flex;
        width: 100%;
    }
`