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
    background: red;
    grid-area: brand;
`

export const Menu = styled.ul`
    background: green;
    grid-area: menu;
`

export const Search = styled.div`
    background: blue;
    grid-area: search;
`

export const Content = styled.div`
    background: yellow;
    grid-area: content;
`

export const NewNote = styled.button`
    background: orange;
    grid-area: newnote;
`
