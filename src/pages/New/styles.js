import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    
    height: 100vh;
    width: 100%;

    > main {
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

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const Form = styled.form`
    margin: 38px auto 98px;
    max-width: 550px;

    > header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 36px;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 20px;
        }
    }

    .marcadores {
        margin-top: 47px;
    }

    > button {
        margin-top: 0;
    }
`