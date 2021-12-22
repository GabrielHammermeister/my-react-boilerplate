import * as S from './Icon.styles'

interface IconProps {
   source: string
   size?: number
   altMessage: string
}

const Icon = ({source, size = 100, altMessage}: IconProps) => {
   return (
      <>
         <S.Image src={source} alt={altMessage} height={size}/>
      </>
   )
}

export default Icon