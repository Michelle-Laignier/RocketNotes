import styled from 'styled-components'

export const Container = styled.span`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 12px;
    margin-right: 6px;
    padding: 5px 14px;
`