import React from 'react'
import styled from '@emotion/styled'

const Hero = styled.header`
  height: 90vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const TitleText = styled.h1`
  font-size: 6rem;
`

const RainbowText = styled.span`
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const OutlineText = styled.span`
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

const Subtitle = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: bold;
  font-size: 2rem;
`

export default () => (
  <Hero>
    <TitleText>
      <OutlineText>MAYBE</OutlineText>&#8203;
      <RainbowText>SOMETHING</RainbowText>
    </TitleText>
    <Subtitle>a blog</Subtitle>
  </Hero>
)
