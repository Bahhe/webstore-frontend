import React from "react"
import CheckIcon from "@mui/icons-material/Check"
import { mobile } from "../../../assests/globalStyles/responsive"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin: 4em 0 0 0;
  ${mobile({
    flexDirection: "column",
  })}
`
const VideoSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2rem 4rem;
  ${mobile({
    margin: "1em",
  })}
`
const InfoSide = styled.div`
  flex: 1;
  margin: 2rem;
`
const Title = styled.div`
  font-size: 2em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 0.9em 0;
`
const Desc = styled.div`
  font-size: 1.1em;
  font-weight: 300;
  opacity: 0.9;
  line-height: 1.3em;
  margin: 0 0 1em 0;
  text-transform: capitalize;
`
const PointsContainer = styled.div`
  display: flex;
  margin: 3em 0 0 0;
`
const LeftPoints = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const RightPoints = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Points = styled.div`
  margin: 0 0 2em 2em;
  font-size: 0.9em;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Video = styled.iframe`
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  aspect-ratio: 16/9;
`

const VideoSection = () => {
  return (
    <Container>
      <VideoSide>
        <Video
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/bPQJKz42m80"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      </VideoSide>
      <InfoSide>
        <Title>how to choose a pc ?</Title>
        <Desc>
          What Are The Most Important Factors To Consider When Buying A PC, you
          can check out the video on the left to understand how to choose a pc.
        </Desc>
        <PointsContainer>
          <LeftPoints>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  border: "2px solid orange",
                  color: "orange",
                  margin: "0 1em 0 0",
                }}
              />
              Budget
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  border: "2px solid orange",
                  color: "orange",
                  margin: "0 1em 0 0",
                }}
              />
              Processor
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  border: "2px solid orange",
                  color: "orange",
                  margin: "0 1em 0 0",
                }}
              />
              Memory
            </Points>
          </LeftPoints>
          <RightPoints>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  border: "2px solid orange",
                  color: "orange",
                  margin: "0 1em 0 0",
                }}
              />
              Graphics Card
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  border: "2px solid orange",
                  color: "orange",
                  margin: "0 1em 0 0",
                }}
              />
              Storage
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: "flex",
                  width: "1em",
                  height: "1em",
                  borderRadius: "50%",
                  border: "2px solid orange",
                  color: "orange",
                  margin: "0 1em 0 0",
                }}
              />
              Operating System
            </Points>
          </RightPoints>
        </PointsContainer>
      </InfoSide>
    </Container>
  )
}

export default VideoSection
