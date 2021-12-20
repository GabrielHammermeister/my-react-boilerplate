import Square from 'components/Square/Square.index'
import { ReactNode, useEffect, useState } from 'react'
import * as S from './Board.styles'

const Board = () => {

   const [squares, setSquares] = useState<string[]>([])

   useEffect(() => {
      
      generateSquares()

   }, [])

   const generateSquares = async () => {
      let color = true
      for(let line = 8; line >= 1; line--) {
         for(let column = 1; column <= 8; column++) {        
            await setSquares((prevSquares) =>[...prevSquares, color ? 'black': 'white'])
            color = !color
         }
         color = !color
      }
   }
   
   return (
      <S.Container>
         {
            squares.map( (color, index) => (
               <Square key={index} squareColor={color} />
            ))
         }
      </S.Container>
   )
}

export default Board