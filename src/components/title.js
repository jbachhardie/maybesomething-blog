import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { rainbow } from '../style/color'

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

const slide = keyframes`
  0%{
    background-position: 0 0;
  }
  100%{
    background-position: -2000px 0;
  }
`

const RainbowText = styled.span`
  background: linear-gradient(
    to right,
    ${rainbow[0]},
    ${rainbow[0]} 16.67%,
    ${rainbow[1]} 16.67%,
    ${rainbow[1]} 33.33%,
    ${rainbow[2]} 33.33%,
    ${rainbow[2]} 50%,
    ${rainbow[3]} 50%,
    ${rainbow[3]} 66.67%,
    ${rainbow[4]} 66.67%,
    ${rainbow[4]} 82.33%,
    ${rainbow[5]} 82.33%
  );
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 1s ease-in-out;
  animation: ${slide} 60s linear infinite;
  &:hover {
    background-size: 50% 100%;
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

const height = 1.5

const carousel = keyframes`
  0%{
    transform: translateY(0)
  }
  4.4%{
    transform: translateY(-${height * 1}em)
  }
  16.6%{
    transform: translateY(-${height * 1}em)
  }
  21%{
    transform: translateY(-${height * 2}em)
  }
  32.3%{
    transform: translateY(-${height * 2}em)
  }
  36.8%{
    transform: translateY(-${height * 3}em)
  }
  50%{
    transform: translateY(-${height * 3}em)
  }
  54.4%{
    transform: translateY(-${height * 4}em)
  }
  66.6%{
    transform: translateY(-${height * 4}em)
  }
  71%{
    transform: translateY(-${height * 5}em)
  }
  84.2%{
    transform: translateY(-${height * 5}em)
  }
  89.6%{
    transform: translateY(-${height * 6}em)
  }
  100%{
    transform: translateY(-${height * 6}em)
  }
`

const CarouselContainer = styled.div`
  overflow-y: hidden;
  height: 1.2em;
  & > * + * {
    padding-top: 0.5em;
  }
`

const CarouselMessage = styled.p`
  color: ${({ color }) => color};
  line-height: 1em;
  margin: 0;
  animation: ${carousel} 20s ease-in infinite;
`

const messages = [
  'about code',
  'about networks',
  'about humans',
  'about things',
  'made with love',
  'by jae anne',
  'about code'
]

const MessageCarousel = () => (
  <CarouselContainer>
    {messages.map((msg, i) => (
      <CarouselMessage key={i} color={rainbow[i]}>
        {msg}
      </CarouselMessage>
    ))}
  </CarouselContainer>
)

export default () => {
  return (
    <Hero>
      <TitleText>
        <OutlineText>MAYBE</OutlineText>&#8203;
        <RainbowText>SOMETHING</RainbowText>
      </TitleText>
      <Subtitle>
        <p>a blog</p>
        <MessageCarousel />
      </Subtitle>
    </Hero>
  )
}
