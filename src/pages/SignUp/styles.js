import styled from "styled-components";
import signImg from "../../assets/signImg.svg"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100vh;
`

export const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    width: auto;

    > h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 48px;
        font-weight: 700;
    }

    p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 14px;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: 500;
        margin: 48px 0;
    }

    > button {
        margin: 8px 0 80px;
    }

    > button:last-child {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }    
`

export const Img = styled.div`
    background: url(${signImg}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.5);
    flex: 1;
`