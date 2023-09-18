import styled from "styled-components";

export const Container = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
    padding: 16px;
    resize: none;

    height: 150px;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`