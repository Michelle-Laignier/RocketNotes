import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    > header {
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        display: flex;
        height: 144px;
        padding: 0 124px;
        width: 100%;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }
`

export const Form = styled.form`
    margin: 30px auto 0;
    max-width: 340px;
    text-align: center;
    width: 100%;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    > button {
        margin: 16px 0 80px;
    } 
`

export const Avatar = styled.div`
    margin: -124px auto 64px;
    position: relative;

    height: 186px;
    width: 186px;
    // pra não "encolher" o header quando setar a width e height da img

    > img {
        border-radius: 50%;
        height: 186px;
        width: 186px;
    }

    > label {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        border-radius: 50%;
        cursor: pointer;

        align-items: center;
        display: flex;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        height: 48px;
        width: 48px;

        input {
            display: none;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            height: 20px;
            width: 20px;
        }
    }
`