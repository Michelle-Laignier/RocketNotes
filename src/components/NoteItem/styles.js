import styled from 'styled-components'

export const Container = styled.div`
    align-items: center;
    display: flex;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    padding-right: 16px;

    > button {
        background: none;
        border: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > input {
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding: 12px;

        height: 56px;
        width: 100%;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`