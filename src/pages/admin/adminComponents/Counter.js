import React from 'react'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Field = styled.div`
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 2em 4em;
  margin: 0 5em;
`

const Title = styled.div`
  font-size: 1.5em;
  text-transform: capitalize;
`

const Numbers = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`

const Price = styled.div`
  font-size: 1.8em;
  font-weight: 500;
  margin: 0 1em 0 0;
`

const Percentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Desc = styled.div`
  font-size: 1.2em;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.5);
`

const Counter = () => {
  return (
    <Container>
      <Field>
        <Title>revenue</Title>
        <Numbers>
          <Price>$234.4</Price>
          <Percentage>
            -12.3
            <ArrowDownward
              style={{ fontSize: '1em', color: 'red', margin: '0 0 0 .5em' }}
            />
          </Percentage>
        </Numbers>
        <Desc>compared to last month</Desc>
      </Field>
      <Field>
        <Title>sales</Title>
        <Numbers>
          <Price>$934</Price>
          <Percentage>
            +12
            <ArrowUpward
              style={{ fontSize: '1em', color: 'red', margin: '0 0 0 .5em' }}
            />
          </Percentage>
        </Numbers>
        <Desc>compared to last month</Desc>
      </Field>
      <Field>
        <Title>cost</Title>
        <Numbers>
          <Price>$134.3</Price>
          <Percentage>
            +42.2
            <ArrowUpward
              style={{ fontSize: '1em', color: 'red', margin: '0 0 0 .5em' }}
            />
          </Percentage>
        </Numbers>
        <Desc>compared to last month</Desc>
      </Field>
    </Container>
  )
}

export default Counter
