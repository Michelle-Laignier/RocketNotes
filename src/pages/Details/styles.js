import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    'header'
    'content'
    ;

    height: 100vh;
    width: 100%;
`
{/*grid pra dizer onde cada parte do nosso layout vai se encaixar*/}

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`