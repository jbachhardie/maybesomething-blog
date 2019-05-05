import React from 'react'
import styled from '@emotion/styled'
import { red, orange, green, yellow, blue } from '../style/color'

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
  background: linear-gradient(
    to right,
    ${red},
    ${red} 20%,
    ${orange} 20%,
    ${orange} 40%,
    ${green} 40%,
    ${green} 60%,
    ${yellow} 60%,
    ${yellow} 80%,
    ${blue} 80%
  );
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 1s ease-in-out;
  &:hover {
    background-size: 50% 100%;
    background-position: -50% -50%;
  }
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
