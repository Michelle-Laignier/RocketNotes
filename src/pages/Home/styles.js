import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
`

{/*
    grid-template-columns: 250px auto; menu e o resto da página.
    grid-template-rows: 105px 128px auto 64px; cabeçalho, search, resto e botão.
*/}

export const Brand = styled.div`
    grid-area: brand;

    align-items: center;
    display: flex;
    justify-content: center;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-bottom-style: solid;
    border-bottom-width: 1px;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 24px;
    }
`

export const Menu = styled.ul`
    grid-area: menu;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }

`

export const Search = styled.div`
    grid-area: search;

    margin: 64px 64px 0;
`

export const Content = styled.div`
    grid-area: content;

    margin: 36px 64px 0;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 12px;
    }

    > section {
        display: grid;
        row-gap: 16px;
    }
`

export const NewNote = styled.button`
    grid-area: newnote;

    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    display: flex;
    font-size: 20px;
    gap: 8px;
    justify-content: center;
`
