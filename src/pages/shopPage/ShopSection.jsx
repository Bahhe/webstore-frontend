import React, { useState } from 'react'
import Products from './Products'
import { useListProductsQuery } from '../../features/products/productsApiSlice'
import { useLocation } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'
import Spinner from '../../components/Spinner'
import { SearchOutlined } from '@mui/icons-material'
import hp from '../../assests/images/hp.png'
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
import { brands, categoriesData } from './categories'

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
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState(
    searchValue ? searchValue : ''
  )
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
      search: searchResult,
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
    setSearchResult('')
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
    setSearchResult('')
    setSort(e.target.value)
    refetch()
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
    setPage(1)
    setLimit(9)
    setSearchResult('')
    setSort('newest')
    refetch()
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setCategory('all')
    setPage(1)
    setSort('newest')
    setLimit(9)
    setSearchResult(search)
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
          {categoriesData.map((item, index) => (
            <Category key={index}>
              <TextWrapper>
                <FaLaptop
                  style={{
                    marginRight: '.2em',
                    fontSize: '1.2em',
                    opacity: '.6',
                  }}
                />
                <Text name={item.name} onClick={handleFilters}>
                  {item.value}
                </Text>
              </TextWrapper>
            </Category>
          ))}
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
          {brands.map((item, index) => (
            <Category key={index}>
              <TextWrapper>
                {item.icons}

                <Text name={item.name} onClick={handleFilters}>
                  {item.name}
                </Text>
              </TextWrapper>
            </Category>
          ))}
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
          <SearchWrapper onSubmit={handleSearch}>
            <Search
              placeholder="Search product ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
              }}
            >
              <SearchOutlined />
            </button>
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
