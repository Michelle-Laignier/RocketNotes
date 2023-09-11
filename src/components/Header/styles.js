import styled from 'styled-components'

export const Container = styled.header`
    grid-area: header;

    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-bottom-style: solid;
    border-bottom-width: 1px;

    display: flex;
    justify-content: space-between;
    height: 105px;
    padding: 0 80px;
    width: 100%;
`

export const Profile = styled.div`
    align-items: center;
    display: flex;
    gap: 9px;

    > img {
        border-radius: 50%;
        height: 70px;
        width: 70px;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    > div span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 14px;
    }

    > div strong {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 18px;
    }
`

export const Logout = styled.button`
    background: none;
    border: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        height: 36px;
        width: 49px;
    }
`

{/* > img estiliza a img dentro do component Profile*/}

{/*
    > div {
        ...
    }

    > div span {
        ...
    }

    Ou

    > div {
        span {

        }
    }
*/}