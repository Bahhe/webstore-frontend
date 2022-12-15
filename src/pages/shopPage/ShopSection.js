import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import React, { useState } from 'react'
import styled from 'styled-components'
import Products from './Products'
import { useGetProductsQuery } from '../../features/products/productsApiSlice'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  margin: 5em 0 0 0;
  display: flex;
  gap: 2em;
`
const FilterSection = styled.div`
  flex: 1;
`
const TitleSection = styled.div`
  width: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SectionTitle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  text-transform: capitalize;
  color: white;
  padding: 1rem 0;
`
const CategoriesSection = styled.div`
  padding: 0 0 1em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
const Title = styled.div`
  margin: 1em 0 1em 3em;
  font-size: 1.1em;
  text-transform: uppercase;
`
const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  margin: 1em 0 0.8em 1.6em;
`

const TextWrapper = styled.div`
  display: flex;
  &:hover {
    color: orange;
  }
`

const Text = styled.div`
  cursor: pointer;
`

const Amount = styled.div`
  margin-right: 1em;
  font-size: 0.9em;
  opacity: 0.8;
`

const PriceSection = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 0 2em 0;
`
const AmountSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9em;
`
const From = styled.input`
  width: 5em;
  height: 2em;
  margin: 0 1em;
  padding-left: 0.5em;
`
const To = styled.input`
  width: 5em;
  height: 2em;
  margin: 0 1em;
  padding-left: 0.5em;
`
const ManufacturerSection = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 0 2em 0;
`

const ProductsSection = styled.div`
  flex: 4;
`
const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Right = styled.div`
  display: flex;
  align-items: center;
`
const LayoutSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1em;
`
const List = styled.div`
  margin: 0.5em 0.2em;
  background-color: white;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  &:hover {
    background-color: orange;
    color: white;
  }
`
const Grid = styled.div`
  margin: 0.5em 0.2em;
  background-color: white;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  &:hover {
    background-color: orange;
    color: white;
  }
`
const NumberOfItems = styled.div`
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.8);
`
const SortBySection = styled.div`
  display: flex;
  align-items: center;
`
const SortTitle = styled.div`
  margin: 0 1em 0 0;
  text-transform: capitalize;
`
const SortOptions = styled.select`
  height: 2.5em;
  margin: 0 1em 0 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;
  text-transform: capitalize;
`
const Options = styled.option``

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ProductsTitle = styled.div`
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 0 0 1em 0;
`

const ShopSection = () => {
  let location = useLocation()
  const category = new URLSearchParams(location.search).get('category')

  const [params, setParams] = useState({
    sort: 'newest',
    category: category ? category : '',
  })
  const [filters, setFilters] = useState({ sort: 'newest', category: '' })

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery(params.category ? params : filters, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })

  const handleFilters = (e) => {
    setParams({
      sort: 'newest',
      category: '',
    })
    const value = e.target.getAttribute('name')
    if (value === 'all') {
      return setFilters({ sort: 'newest', category: '' })
    }
    setFilters({
      ...filters,
      category: value,
    })
  }
  const handleSort = (e) => {
    setParams({
      sort: 'newest',
      category: '',
    })
    const value = e.target.value
    setFilters({
      ...filters,
      sort: value,
    })
  }
  let shopProducts
  if (isLoading) shopProducts = <p>loading...</p>

  if (isError) shopProducts = <p>Error: {error?.message}</p>

  if (isSuccess) {
    const { ids } = products
    shopProducts =
      ids?.length &&
      ids.map((productId) => <Products key={productId} productId={productId} />)
  }
  return (
    <Container>
      <FilterSection>
        <TitleSection>
          <SectionTitle>filter products by</SectionTitle>
        </TitleSection>
        <CategoriesSection>
          <Title>Category</Title>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="all" onClick={handleFilters}>
                all
              </Text>
            </TextWrapper>
            <Amount>&#40;18&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="gamingPc" onClick={handleFilters}>
                gaming pc
              </Text>
            </TextWrapper>
            <Amount>&#40;18&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="allInOne" onClick={handleFilters}>
                all in one
              </Text>
            </TextWrapper>
            <Amount>&#40;7&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="tabletPc" onClick={handleFilters}>
                tablet pc
              </Text>
            </TextWrapper>
            <Amount>&#40;4&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="chromebook" onClick={handleFilters}>
                chromebook
              </Text>
            </TextWrapper>
            <Amount>&#40;2&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="macs" onClick={handleFilters}>
                macs
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
        </CategoriesSection>
        <PriceSection>
          <Title>price</Title>
          <AmountSection>
            $ <From placeholder="From" /> - $ <To placeholder="To" />
          </AmountSection>
        </PriceSection>
        <ManufacturerSection>
          <Title>Manufacturer</Title>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="hp" onClick={handleFilters}>
                hp
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="dell" onClick={handleFilters}>
                dell
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="acer" onClick={handleFilters}>
                acer
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="asus" onClick={handleFilters}>
                asus
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="lenovo" onClick={handleFilters}>
                lenovo
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="apple" onClick={handleFilters}>
                apple
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="toshiba" onClick={handleFilters}>
                toshiba
              </Text>
            </TextWrapper>
            <Amount>&#40;1&#41;</Amount>
          </Category>
        </ManufacturerSection>
      </FilterSection>
      <ProductsSection>
        <ProductsTitle>laptops</ProductsTitle>
        <NavigationBar>
          <Left>
            <LayoutSection>
              <List style={{ backgroundColor: 'orange', color: 'white' }}>
                <FormatListBulletedOutlinedIcon />
              </List>
              <Grid>
                <GridViewOutlinedIcon />
              </Grid>
            </LayoutSection>
            <NumberOfItems>items 1-9 of 10</NumberOfItems>
          </Left>
          <Right>
            <SortBySection>
              <SortTitle>sort by:</SortTitle>
              <SortOptions onChange={handleSort}>
                <Options value="newest">newest</Options>
                <Options value="highest">price highest - lowest</Options>
                <Options value="lowest">price lowest - highest</Options>
              </SortOptions>
            </SortBySection>
          </Right>
        </NavigationBar>
        <ProductsContainer>{shopProducts}</ProductsContainer>
        <NavigationBar>
          <Left>
            <LayoutSection>
              <List
                style={{
                  fontSize: '.9em',
                  backgroundColor: 'orange',
                  color: 'white',
                }}
              >
                1
              </List>
              <Grid style={{ fontSize: '.9em' }}>2</Grid>
              <Grid>&#8594;</Grid>
            </LayoutSection>
          </Left>
          <Right>
            <SortBySection>
              <NumberOfItems style={{ marginRight: '.5em' }}>
                items 1-9 of 10
              </NumberOfItems>
            </SortBySection>
          </Right>
        </NavigationBar>
      </ProductsSection>
    </Container>
  )
}

export default ShopSection
