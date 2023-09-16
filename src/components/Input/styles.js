import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    display: flex;
    margin-bottom: 8px;
    width: 100%;

    > input {
        background: transparent;
        border: 0;
        color: ${({ theme }) => theme.COLORS.WHITE};
        height: 56px;
        padding: 12px;
        width: 100%;
    }

    &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > svg {
        margin-left: 16px;
    }
`