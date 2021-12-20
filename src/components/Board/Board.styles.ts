import styled from 'styled-components'

export const Container = styled.main`
    display: grid;
    grid-template: repeat(8, 100px) / repeat(8, 100px);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-content: center;
`