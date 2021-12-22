import Icon from 'components/Icon/Icon.index'
import * as S from './Piece.styles'
// import { ReactComponent as HorseSVG } from '%PUBLIC_URL%/portablejim-Chess-tile-Knight-3.svg'
interface PieceProps {
   icon?: SVGElement
}

const Piece = ({ icon }: PieceProps) => (
   <S.Container>
      {/* <HorseSVG/> */}
      <Icon source='portablejim-Chess-tile-Knight-3.svg' altMessage='Horse Chess Piece'/>
   </S.Container>
)

export default Piece