import {
  GroupOutlined,
  Inventory,
  ListAltOutlined,
  Visibility,
} from '@mui/icons-material'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetOrdersQuery } from '../../../../features/orders/ordersApiSlice'
import { useGetUsersQuery } from '../../../../features/users/usersApiSlice'
import Orders from './Orders'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useGetProductsQuery } from '../../../../features/products/productsApiSlice'
import {
  Container,
  Left,
  Title,
  UsersList,
  User,
  Image,
  UserInfo,
  Name,
  Display,
  Right,
  Table,
  Wrapper,
  Statistics,
  Item,
  ItemName,
  ItemQuantity,
  DashboardWrapper,
  Chart,
} from './HomePageContent.styles'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
const HomePageContent = () => {
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1,
  })

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o

      setOpacity({ ...opacity, [dataKey]: 0.5 })
    },
    [opacity, setOpacity]
  )

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o
      setOpacity({ ...opacity, [dataKey]: 1 })
    },
    [opacity, setOpacity]
  )

  const navigate = useNavigate()

  const { data: products } = useGetProductsQuery('products', {
    refetchOnMountOrArgChange: true,
  })
  const { data: orders } = useGetOrdersQuery('orders', {
    refetchOnMountOrArgChange: true,
  })
  const { data: users } = useGetUsersQuery('users', {
    refetchOnMountOrArgChange: true,
  })

  return (
    <Container>
      <Statistics>
        <Item onClick={() => navigate('/admin/products')}>
          <Inventory style={{ fontSize: '2em', color: '#5757f3' }} />
          <ItemQuantity>
            {products ? Object.values(products?.entities).length : 0}
          </ItemQuantity>
          <ItemName>total products</ItemName>
        </Item>
        <Item onClick={() => navigate('/admin/users')}>
          <GroupOutlined style={{ fontSize: '2em', color: '#5757f3' }} />
          <ItemQuantity>
            {users ? Object.values(users?.entities).length : 0}
          </ItemQuantity>
          <ItemName>total members</ItemName>
        </Item>
        <Item onClick={() => navigate('/admin/orders')}>
          <ListAltOutlined style={{ fontSize: '2em', color: '#5757f3' }} />
          <ItemQuantity>
            {orders ? Object.values(orders?.entities).length : 0}
          </ItemQuantity>
          <ItemName>total orders</ItemName>
        </Item>
      </Statistics>
      <Wrapper style={{ alignItems: 'flex-start' }}>
        <Left>
          <Title style={{ width: '100%', textAlign: 'center' }}>members</Title>
          <UsersList>
            {!users ? (
              <p>no users</p>
            ) : (
              Object.values(users.entities).map((user) => (
                <User key={user.id}>
                  <Wrapper style={{ flexDirection: 'row' }}>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
                    <UserInfo>
                      <Name>{`${user.firstName} ${user.lastName}`}</Name>
                    </UserInfo>
                  </Wrapper>
                  <Wrapper>
                    <Display
                      onClick={() => navigate(`/admin/user/edit/${user.id}`)}
                    >
                      <Visibility style={{ margin: '0 .4em 0 0' }} />
                      display
                    </Display>
                  </Wrapper>
                </User>
              ))
            )}
          </UsersList>
        </Left>
        <DashboardWrapper>
          <Chart
            style={{
              boxShadow: '0 0 20px #ccc',
              borderRadius: '1em',
              padding: '1em',
              border: '1px solid rgba(0, 0, 0, 0.15)',
            }}
          >
            <LineChart
              width={900}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              <Line
                type="monotone"
                dataKey="pv"
                strokeOpacity={opacity.pv}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                strokeOpacity={opacity.uv}
                stroke="#82ca9d"
              />
            </LineChart>
          </Chart>
          <Right>
            <Title
              style={{
                width: '100%',
                textAlign: 'center',
                margin: '.5em 0',
                padding: '.5em 0 0 0',
              }}
            >
              orders
            </Title>
            <Table>
              {!orders ? (
                <p>no orders yet</p>
              ) : (
                Object.values(orders?.entities).map((order) => (
                  <Orders key={order.id} order={order} />
                ))
              )}
            </Table>
          </Right>
        </DashboardWrapper>
      </Wrapper>
    </Container>
  )
}

export default HomePageContent
