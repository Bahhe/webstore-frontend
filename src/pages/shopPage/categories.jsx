import { SiDell, SiAcer, SiAsus, SiApple, SiLenovo } from 'react-icons/si'

export const brands = [
  {
    name: 'dell',
    icons: (
      <SiDell
        style={{
          marginRight: '.4em',
          fontSize: '1.2em',
        }}
      />
    ),
  },
  {
    name: 'asus',
    icons: (
      <SiAsus
        style={{
          marginRight: '.4em',
          fontSize: '1.2em',
        }}
      />
    ),
  },
  {
    name: 'lenovo',
    icons: (
      <SiLenovo
        style={{
          marginRight: '.4em',
          fontSize: '1.2em',
        }}
      />
    ),
  },
  {
    name: 'acer',
    icons: (
      <SiAcer
        style={{
          marginRight: '.4em',
          fontSize: '1.2em',
        }}
      />
    ),
  },
  {
    name: 'apple',
    icons: (
      <SiApple
        style={{
          marginRight: '.4em',
          fontSize: '1.2em',
        }}
      />
    ),
  },
]

export const categoriesData = [
  {
    name: 'all',
    value: 'all',
  },
  {
    name: 'gaming',
    value: 'gaming pc',
  },
  {
    name: 'allInOne',
    value: 'all in one',
  },
  {
    name: 'touchScreen',
    value: 'touch screen',
  },
  {
    name: 'tablet',
    value: 'tablet pc',
  },
  {
    name: 'apple',
    value: 'apple',
  },
]
