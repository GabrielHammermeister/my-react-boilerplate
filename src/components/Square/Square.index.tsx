import * as S from './Square.styles'

interface SquareProps {
   squareColor: string
}

const Square = ({ squareColor }: SquareProps) => {   
   return (
      <>
         <S.Square squareColor={squareColor}/>
      </>
   )
}

export default Square