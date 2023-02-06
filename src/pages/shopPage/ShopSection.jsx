import React, { useState } from 'react'
import Products from './Products'
import { useListProductsQuery } from '../../features/products/productsApiSlice'
import { useLocation } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'
import Spinner from '../../components/Spinner'
import { SearchOutlined } from '@mui/icons-material'
import hp from '../../assests/images/hp.png'
import { SiDell, SiAcer, SiAsus, SiApple, SiLenovo } from 'react-icons/si'
import { FaLaptop } from 'react-icons/fa'
import styled from 'styled-components'
import { tablet } from '../../assests/globalStyles/responsive'
import {
  NavigationBar,
  Left,
  Right,
  LayoutSection,
  NumberOfItems,
  SortBySection,
  SortTitle,
  SortOptions,
  Options,
  ProductsContainer,
  ProductsTitle,
  SearchContainer,
  SearchWrapper,
  Search,
  SectionTitle,
  CategoriesSection,
  Title,
  Category,
  TextWrapper,
  Text,
  ManufacturerSection,
  ProductsSection,
  Container,
  FilterSection,
  TitleSection,
  CategoryOptions,
} from './ShopSection.styles'

const Num = styled.div`
  margin: 0.5em 0.2em;
  background-color: ${(props) =>
    props.state === props.page ? 'orange' : 'white'};
  color: ${(props) => (props.state === props.page ? 'white' : 'black')};
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: orange;
    color: white;
  }
  ${tablet({
    display: 'none',
  })}
`
const Grid = styled.div`
  margin: 0.5em 0.2em;
  background-color: ${(props) =>
    props.state === props.page ? 'orange' : 'white'};
  color: ${(props) => (props.state === props.page ? 'white' : 'black')};
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: orange;
    color: white;
  }
  ${tablet({
    fontSize: '1.5em',
  })}
`

const ShopSection = () => {
  useTitle('BlackBeard. | Shop')
  const searchValue = new URLSearchParams(useLocation().search).get('search')
  const categoryValue = new URLSearchParams(useLocation().search).get(
    'category'
  )
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState(
    categoryValue ? categoryValue : 'all'
  )
  const [sort, setSort] = useState('newest')
  const [search, setSearch] = useState(searchValue ? searchValue : '')
  const [limit, setLimit] = useState(9)

  const {
    data: products,
    isLoading,
    refetch,
  } = useListProductsQuery(
    {
      category,
      page,
      sort,
      search,
      limit,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  )

  const handleFilters = (e) => {
    setPage(1)
    setSort('newest')
    setLimit(9)
    setSearch('')
    setCategory(e.target.getAttribute('name'))
    refetch()
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }

  const handleSort = (e) => {
    setCategory('all')
    setPage(1)
    setLimit(9)
    setSearch('')
    setSort(e.target.value)
    refetch()
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setLimit(9)
    setSearch('')
    setSort('newest')
    refetch()
  }

  const handleSearch = (e) => {
    setCategory('all')
    setPage(1)
    setSort('newest')
    setLimit(9)
    setSearch(e.target.value)
    refetch()
  }

  const handlePageBackward = () => {
    setPage((prev) => prev - 1)
    refetch()
    document.documentElement.scrollTo({
      top: 300,
      left: 0,
      behavior: 'smooth',
    })
  }
  const handlePageForward = () => {
    setPage((prev) => prev + 1)
    refetch()
    document.documentElement.scrollTo({
      top: 300,
      behavior: 'smooth',
    })
  }
  const handlePageNumber = (number) => {
    setPage(number)
    refetch()
    document.documentElement.scrollTo({
      top: 300,
      left: 0,
      behavior: 'smooth',
    })
  }

  let shopProducts
  if (isLoading) {
    shopProducts = <Spinner color="black" />
  }

  shopProducts =
    products && !products?.products?.length ? (
      <p>no product found</p>
    ) : (
      products?.products.map((product) => (
        <Products key={product.id} product={product} />
      ))
    )

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
              <FaLaptop
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
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="gaming" onClick={handleFilters}>
                gaming pc
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
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
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="tablet" onClick={handleFilters}>
                tablet pc
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
                style={{
                  marginRight: '.2em',
                  fontSize: '1.2em',
                  opacity: '.6',
                }}
              />
              <Text name="touchScreen" onClick={handleFilters}>
                touchScreen
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
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
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
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
          </Category>
        </CategoriesSection>
        <ManufacturerSection>
          <Title>Manufacturer</Title>
          <Category>
            <TextWrapper>
              <img
                width="20px"
                height="20px"
                style={{ marginRight: '.4em' }}
                src={hp}
                alt=""
              />
              <Text name="hp" onClick={handleFilters}>
                hp
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <SiDell
                style={{
                  marginRight: '.4em',
                  fontSize: '1.2em',
                }}
              />
              <Text name="dell" onClick={handleFilters}>
                dell
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <SiAcer
                style={{
                  marginRight: '.4em',
                  fontSize: '1.2em',
                }}
              />
              <Text name="acer" onClick={handleFilters}>
                acer
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <SiAsus
                style={{
                  marginRight: '.4em',
                  fontSize: '1.2em',
                }}
              />
              <Text name="asus" onClick={handleFilters}>
                asus
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <SiLenovo
                style={{
                  marginRight: '.4em',
                  fontSize: '1.2em',
                }}
              />
              <Text name="lenovo" onClick={handleFilters}>
                lenovo
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <SiApple
                style={{
                  marginRight: '.4em',
                  fontSize: '1.2em',
                }}
              />
              <Text name="apple" onClick={handleFilters}>
                apple
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <Text name="other" onClick={handleFilters}>
                other
              </Text>
            </TextWrapper>
          </Category>
        </ManufacturerSection>
      </FilterSection>
      <ProductsSection>
        <ProductsTitle>laptops</ProductsTitle>
        <NavigationBar>
          <Left>
            <NumberOfItems>
              {products && products?.products?.length > 1 ? 'items' : 'item'}{' '}
              {products && products?.products?.length} of{' '}
              {products && products?.total}
            </NumberOfItems>
            <CategoryOptions onChange={handleCategory}>
              <Options value="">category</Options>
              <Options value="allInOne">all in one</Options>
              <Options value="tablet">tablet</Options>
              <Options value="gaming">gaming pc</Options>
              <Options value="chromebook">chromebook</Options>
              <Options value="hp">hp</Options>
              <Options value="dell">dell</Options>
              <Options value="asus">asus</Options>
              <Options value="lenovo">lenovo</Options>
              <Options value="acer">acer</Options>
              <Options value="apple">apple</Options>
            </CategoryOptions>
          </Left>
          <Right>
            <SortBySection>
              <SortTitle>sort:</SortTitle>
              <SortOptions onChange={handleSort}>
                <Options value="newest">latest</Options>
                <Options value="lowest">price: lowest - highest</Options>
                <Options value="highest">price: highest - lowest</Options>
              </SortOptions>
            </SortBySection>
          </Right>
        </NavigationBar>
        <SearchContainer>
          <SearchWrapper>
            <Search
              placeholder="Search product ..."
              value={search}
              onChange={handleSearch}
            />
            <SearchOutlined />
          </SearchWrapper>
        </SearchContainer>
        <ProductsContainer>{shopProducts}</ProductsContainer>
        <NavigationBar style={{ justifyContent: 'center' }}>
          <LayoutSection>
            {products && page > 1 && (
              <Grid onClick={handlePageBackward}>&#8592;</Grid>
            )}
            {products &&
              [...Array(Math.ceil(products?.total / products?.limit))].map(
                (val, index) => (
                  <Num
                    onClick={() => handlePageNumber(index + 1)}
                    key={index}
                    style={{ fontSize: '.9em' }}
                    state={index + 1}
                    page={page}
                  >
                    {index + 1}
                  </Num>
                )
              )}
            {products &&
              page < Math.ceil(products?.total / products?.limit) && (
                <Grid onClick={handlePageForward}>&#8594;</Grid>
              )}
          </LayoutSection>
        </NavigationBar>
      </ProductsSection>
    </Container>
  )
}

export default ShopSection
