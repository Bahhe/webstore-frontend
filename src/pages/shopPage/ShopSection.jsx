import React, { useState } from "react"
import styled from "styled-components"
import Products from "./Products"
import { useListProductsQuery } from "../../features/products/productsApiSlice"
import { useLocation } from "react-router-dom"
import { mobile, mobileCart } from "../../assests/globalStyles/responsive"
import useTitle from "../../hooks/useTitle"
import Spinner from "../../components/Spinner"
import { SearchOutlined } from "@mui/icons-material"
import hp from "../../assests/images/hp.png"
import { SiDell, SiAcer, SiAsus, SiApple, SiLenovo } from "react-icons/si"
import { FaLaptop } from "react-icons/fa"

const Container = styled.div`
  margin: 5em 0 0 0;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: "column",
  })}
`
const FilterSection = styled.div`
  flex: 1;
  ${mobile({
    display: "none",
  })}
`
const TitleSection = styled.div`
  width: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
`
const Grid = styled.div`
  margin: 0.5em 0.2em;
  background-color: ${(props) =>
    props.state === props.page ? "orange" : "white"};
  color: ${(props) => (props.state === props.page ? "white" : "black")};
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
`

const Text = styled.div`
  cursor: pointer;
  font-weight: 300;
`

const ManufacturerSection = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 0 2em 0;
`

const ProductsSection = styled.div`
  flex: 4;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`
const NavigationBar = styled.div`
  display: flex;
  padding: 0.5em;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 1em;
  ${mobile({
    width: "90%",
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const LayoutSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1em;
`
const NumberOfItems = styled.div`
  text-align: right;
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
  font-size: 0.9em;
`
const SortOptions = styled.select`
  height: 2.5em;
  margin: 0 1em 0 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;
  text-transform: capitalize;
  border-radius: 1em;
  padding: 0.5em 1em;
  border: none;
  ${mobile({
    width: "8em",
  })}
`
const Options = styled.option``

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  })}
`

const ProductsTitle = styled.div`
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 0 0 1em 0;
`
const MobileSearch = styled.input`
  margin-bottom: 1em;
  width: 80%;
  padding: 0.5em;
  border-radius: 50px;
  border: 1px solid black;
  ${mobileCart({
    display: "none",
  })}
`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchWrapper = styled.div`
  width: 40%;
  padding: 0 1em;
  position: relative;
  display: flex;
  align-items: center;
  margin: 1em 0;
  border-radius: 1em;
  border: 1px solid lightgrey;
  background-color: white;
`

const Search = styled.input`
  width: 100%;
  height: 3em;
  padding: 0.5em;
  border: none;
  outline: none;
  ${mobile({
    display: "none",
  })}
`
const ShopSection = () => {
  useTitle("TIMGAD. | Shop")
  const location = useLocation()
  const [cat, setCat] = useState(location?.search.split("=")[1])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState(cat ? cat : "all")
  const [sort, setSort] = useState("newest")
  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(6)

  const {
    data: products,
    isLoading,
    refetch,
  } = useListProductsQuery({
    category,
    page,
    sort,
    search,
    limit,
  })

  const handleFilters = (e) => {
    setCat("")
    setCategory(e.target.getAttribute("name"))
    refetch()
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  const handleSearch = (e) => {
    setCategory("all")
    setPage("")
    setSort("")
    setLimit("")
    setPage("")
    setSearch(e.target.value)
    refetch()
  }

  const handlePageBackward = () => {
    setPage((prev) => prev - 1)
    refetch()
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
  const handlePageForward = () => {
    setPage((prev) => prev + 1)
    refetch()
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }
  const handlePageNumber = (number) => {
    setPage(number)
    refetch()
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }

  let shopProducts
  if (isLoading) return (shopProducts = <Spinner />)
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
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
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
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
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
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
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
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
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
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="chromebook" onClick={handleFilters}>
                touchScreen
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <FaLaptop
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
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
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="apple" onClick={handleFilters}>
                macs
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
                style={{ marginRight: ".4em" }}
                src={hp}
                alt=''
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
                  marginRight: ".4em",
                  fontSize: "1.2em",
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
                  marginRight: ".4em",
                  fontSize: "1.2em",
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
                  marginRight: ".4em",
                  fontSize: "1.2em",
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
                  marginRight: ".4em",
                  fontSize: "1.2em",
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
                  marginRight: ".4em",
                  fontSize: "1.2em",
                }}
              />
              <Text name="apple" onClick={handleFilters}>
                apple
              </Text>
            </TextWrapper>
          </Category>
          <Category>
            <TextWrapper>
              <Text name="all" onClick={handleFilters}>
                other
              </Text>
            </TextWrapper>
          </Category>
        </ManufacturerSection>
      </FilterSection>
      <ProductsSection>
        <ProductsTitle>laptops</ProductsTitle>
        <MobileSearch
          placeholder="Search product ..."
          value={search}
          onChange={handleSearch}
          autoFocus
        />
        <NavigationBar>
          <Left>
            <NumberOfItems>
              {products?.products?.length > 1 ? "items" : "item"}{" "}
              {products?.products?.length} of {products.total}
            </NumberOfItems>
          </Left>
          <Right>
            <SortBySection>
              <SortTitle>sort by :</SortTitle>
              <SortOptions onChange={handleSort}>
                <Options value="newest">newest</Options>
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
              autoFocus
            />
            <SearchOutlined />
          </SearchWrapper>
        </SearchContainer>
        <ProductsContainer>{shopProducts}</ProductsContainer>
        <NavigationBar>
          <Left>
            <LayoutSection>
              {page > 1 && <Grid onClick={handlePageBackward}>&#8592;</Grid>}
              {[...Array(Math.ceil(products.total / products.limit))].map(
                (val, index) => (
                  <Grid
                    onClick={() => handlePageNumber(index + 1)}
                    key={index}
                    style={{ fontSize: ".9em" }}
                    state={index + 1}
                    page={page}
                  >
                    {index + 1}
                  </Grid>
                )
              )}
              {page < Math.ceil(products.total / products.limit) && (
                <Grid onClick={handlePageForward}>&#8594;</Grid>
              )}
            </LayoutSection>
          </Left>
          <Right>
            <SortBySection style={{ alignItems: "flex-end" }}>
              <NumberOfItems style={{ marginRight: ".5em" }}>
                {products?.products?.length > 1 ? "items" : "item"}{" "}
                {products?.products?.length} of {products.total}
              </NumberOfItems>
            </SortBySection>
          </Right>
        </NavigationBar>
      </ProductsSection>
    </Container>
  )
}

export default ShopSection