import {
  Inventory,
  ListAltOutlined,
  Person,
  Visibility,
} from "@mui/icons-material"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useGetOrdersQuery } from "../../../../features/orders/ordersApiSlice"
import { useGetUsersQuery } from "../../../../features/users/usersApiSlice"
import Orders from "./Orders"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { useGetProductsQuery } from "../../../../features/products/productsApiSlice"
import { PulseLoader } from "react-spinners"
import { laptop } from "../../../../assests/globalStyles/responsive"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  border-left: 1px solid lightgrey;
  padding: 0 5em;
  ${laptop({
    padding: "0",
  })}
`
const Left = styled.section`
  margin: 1em;
  padding: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-transform: capitalize;
  font-weight: 500;
`
const UsersList = styled.div`
  height: 33em;
  overflow-y: scroll;
`

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0 0 0;
`
const Image = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`
const UserInfo = styled.div`
  margin: 0 0 0 1em;
`
const Name = styled.h2`
  text-transform: capitalize;
  font-size: 0.9em;
  font-weight: 500;
`
const Display = styled.button`
  border: none;
  display: flex;
  align-items: center;
  margin: 0 0 0 4em;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1em;
  opacity: 0.7;
  text-transform: capitalize;
  cursor: pointer;
`
const Right = styled.section`
  margin: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  border-radius: 1em;
`
const Table = styled.section`
  padding: 0.5em;
  overflow-y: scroll;
  height: 31em;
  padding: 1em;
`
const TableTitle = styled.header`
  display: flex;
  align-items: center;
  margin: 1em 1em 0 1em;
`
const SmallTitle = styled.div`
  text-align: start;
  font-weight: 500;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
const Statistics = styled.section`
  padding: 1em;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  ${laptop({
    width: "auto",
    justifyContent: "space-evenly",
  })}
`
const Item = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1em 5em 1em 1em;
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`
const ItemName = styled.h3`
  font-weight: 500;
  opacity: 0.9;
  text-transform: capitalize;
`
const ItemQuantity = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  font-weight: 300;
  margin: 1em 0 0 0;
`

const Chart = styled.section``

const HomePageContent = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  const navigate = useNavigate()

  const { products } = useGetProductsQuery("products", {
    selectFromResult: ({ data }) => ({
      products: data?.entities,
    }),
  })
  const { orders } = useGetOrdersQuery("orders", {
    selectFromResult: ({ data }) => ({
      orders: data?.entities,
    }),
  })
  const { users } = useGetUsersQuery("users", {
    selectFromResult: ({ data }) => ({
      users: data?.entities,
    }),
  })

  return (
    <Container>
      <Statistics>
        <Item
          onClick={() => navigate("/admin/products")}
          style={{ backgroundColor: "red" }}
        >
          <ItemName>total products</ItemName>
          <ItemQuantity>
            {products && Object.values(products).length}
            <Inventory style={{ fontSize: ".7em", marginLeft: ".4em" }} />
          </ItemQuantity>
        </Item>
        <Item
          onClick={() => navigate("/admin/users")}
          style={{ backgroundColor: "orange" }}
        >
          <ItemName>total members</ItemName>
          <ItemQuantity>
            {users && Object.values(users).length}
            <Person style={{ fontSize: ".7em", marginLeft: ".4em" }} />
          </ItemQuantity>
        </Item>
        <Item
          onClick={() => navigate("/admin/orders")}
          style={{ backgroundColor: "blue" }}
        >
          <ItemName>total orders</ItemName>
          <ItemQuantity>
            {orders && Object.values(orders).length}
            <ListAltOutlined style={{ fontSize: ".7em", marginLeft: ".4em" }} />
          </ItemQuantity>
        </Item>
      </Statistics>
      <Chart>
        <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
      </Chart>
      <Wrapper style={{ alignItems: "flex-start" }}>
        <Left>
          <Title style={{ color: "orange" }}>members</Title>
          <UsersList>
            {!users ? (
              <PulseLoader />
            ) : (
              Object.values(users).map((user) => (
                <User key={user.id}>
                  <Wrapper>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/webstore-d48be.appspot.com/o/user(1).png?alt=media&token=477b5102-c1b2-4580-a74b-c3ce9907acae" />
                    <UserInfo>
                      <Name>{`${user.firstName} ${user.lastName}`}</Name>
                    </UserInfo>
                  </Wrapper>
                  <Wrapper>
                    <Display
                      onClick={() => navigate(`/admin/user/edit/${user.id}`)}
                    >
                      <Visibility style={{ margin: "0 .4em 0 0" }} />
                      display
                    </Display>
                  </Wrapper>
                </User>
              ))
            )}
          </UsersList>
        </Left>
        <Right>
          <Title style={{ color: "blue", margin: "1em 1em" }}>orders</Title>
          <TableTitle>
            <SmallTitle style={{ width: "12em" }}>Customer</SmallTitle>
            <SmallTitle style={{ width: "12em" }}>Date</SmallTitle>
            <SmallTitle style={{ width: "6em" }}>NoP</SmallTitle>
            <SmallTitle>Status</SmallTitle>
          </TableTitle>
          <Table>
            {!orders ? (
              <PulseLoader />
            ) : (
              Object.values(orders).map((order) => (
                <Orders key={order.id} order={order} />
              ))
            )}
          </Table>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default HomePageContent
