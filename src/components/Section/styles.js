import styled from 'styled-components'

export const Container = styled.section`
    margin: 28px 0;

    > h2 {
        border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        border-bottom-style: solid;
        border-bottom-width: 1px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 24px;
        padding-bottom: 16px;
    }
`