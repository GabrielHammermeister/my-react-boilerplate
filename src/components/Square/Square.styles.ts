import styled from 'styled-components'

interface SquareProps {
    squareColor: string
}

export const Square = styled.div<SquareProps>`
    height: 100px;
    width: 100px;
    background-color: ${({squareColor}) => squareColor};
`