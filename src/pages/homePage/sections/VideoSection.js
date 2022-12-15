import React from 'react'
import CheckIcon from '@mui/icons-material/Check'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 30em;
  margin: 4em 0 0 0;
`
const VideoSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 2rem;
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
`
const PointsContainer = styled.div`
  display: flex;
  margin: 3em 0 0 0;
`
const LeftPoints = styled.div``
const RightPoints = styled.div``
const Points = styled.div`
  margin: 0 0 2em 2em;
  font-size: 0.9em;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Video = styled.iframe``

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
          reprehenderit, officia odit blanditiis dolore delectus recusandae quos
          itaque ducimus laudantium.
        </Desc>
        <PointsContainer>
          <LeftPoints>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  border: '2px solid orange',
                  color: 'orange',
                  margin: '0 1em 0 0',
                }}
              />
              Lorem ipsum dolor sit amet.
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  border: '2px solid orange',
                  color: 'orange',
                  margin: '0 1em 0 0',
                }}
              />
              Lorem ipsum dolor sit amet.
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  border: '2px solid orange',
                  color: 'orange',
                  margin: '0 1em 0 0',
                }}
              />
              Lorem ipsum dolor sit amet.
            </Points>
          </LeftPoints>
          <RightPoints>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  border: '2px solid orange',
                  color: 'orange',
                  margin: '0 1em 0 0',
                }}
              />
              Lorem ipsum dolor sit amet.
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  border: '2px solid orange',
                  color: 'orange',
                  margin: '0 1em 0 0',
                }}
              />
              Lorem ipsum dolor sit amet.
            </Points>
            <Points>
              <CheckIcon
                style={{
                  display: 'flex',
                  width: '1em',
                  height: '1em',
                  borderRadius: '50%',
                  border: '2px solid orange',
                  color: 'orange',
                  margin: '0 1em 0 0',
                }}
              />
              Lorem ipsum dolor sit amet.
            </Points>
          </RightPoints>
        </PointsContainer>
      </InfoSide>
    </Container>
  )
}

export default VideoSection
