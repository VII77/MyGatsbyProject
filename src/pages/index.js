import React from "react"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import Icon from "../assets/backgroundwave.svg"
import Typing from "react-typing-animation"
import { TypingLoop } from "../components/TypingLoop"
import { CardMainContent } from "../components/CardMainContent"

export default function Home() {
  return (
    <Layout>
      <div className="content-1">
        <Background>
          <Icon></Icon>
        </Background>
        <SubHeader>
          <Typing speed={10}>
            <div className="large-text">
              <p>Learn how to earn money with decetralized finance</p>
              <p>Get high interest from investment in stable coins</p>
              <p>Profit from high trading volume and the crypto bull market</p>
            </div>
          </Typing>
          {/* <div className="text">
            <p>Get involved in crypto investing</p>
          </div> */}
        </SubHeader>
        <MainArea>
          <CardMainContent></CardMainContent>
        </MainArea>
        <MainArea>
          <CardMainContent></CardMainContent>
        </MainArea>
        <MainArea>
          <CardMainContent></CardMainContent>
        </MainArea>
        <BackgroundTyping>{/* <TypingLoop></TypingLoop> */}</BackgroundTyping>
      </div>
    </Layout>
  )
}

export const FlexContainer = styled.div`
  position: relative;
  margin: 40px 0;
  width: 100vw;



  path {
    transform: scaleY(0.5);
  }
  @media (max-width: 1008px) {
    path {
      transform: scaleY(0.5);
    }
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  z-index: -100;
`

export const BackgroundTyping = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const Content = styled.div`
  color: black;
  display: flex;
  font-size: 26px;
  font-weight: bold;
  position: relative;
  margin: auto;
  font-family: 'Pacifico', sans-serif;
  z-index: 100;
  justify-content: center;
`

export const SubHeader = styled.div`
padding-top: 40px;
display: flex;
justify-content: center;
color: white;
font-size: 30px;
font-style: italic;
height: 200px;
`

export const MainArea = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;



`

