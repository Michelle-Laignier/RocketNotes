import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    'header'
    'content';
    
    > main {
        grid-area: content;
        padding: 64px 0;

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
    }

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

export const Content = styled.div`
    margin: 0 auto;
    max-width: 550px;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 36px;
        font-weight: 500;
        padding-top: 64px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 16px;
        margin: 16px 0 26px;
        text-align: justify;
    }
`