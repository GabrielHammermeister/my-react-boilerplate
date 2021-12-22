import styled from 'styled-components'

interface ImageProps{
    height: number
}

export const Image = styled.img<ImageProps>`
    height: ${({height}) => `${height}px`}
`