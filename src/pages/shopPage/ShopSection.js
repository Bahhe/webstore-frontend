import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined"
import React, { useState } from "react"
import styled from "styled-components"
import Products from "./Products"
import { useListProductsQuery } from "../../features/products/productsApiSlice"
import { useLocation } from "react-router-dom"
import PulseLoader from "react-spinners/PulseLoader"
import { laptop, mobile } from "../../assests/globalStyles/responsive"
import useTitle from "../../hooks/useTitle"

const Container = styled.div`
  margin: 5em 0 0 0;
  display: flex;
  gap: 2em;
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
  &:hover {
    color: orange;
  }
`

const Text = styled.div`
  cursor: pointer;
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
  padding: 0.5em;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
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
`
const LayoutSection = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1em;
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
  font-size: 0.9em;
`
const SortOptions = styled.select`
  height: 2.5em;
  margin: 0 1em 0 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;
  text-transform: capitalize;
  border-radius: 50px;
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
`

const ProductsTitle = styled.div`
  font-size: 2.5em;
  text-transform: capitalize;
  padding: 0 0 1em 0;
`
const MobileSearch = styled.input`
  width: 90%;
  margin: auto;
  margin-bottom: 1em;
  padding: 0.5em;
  border-radius: 50px;
  border: 1px solid black;
  ${laptop({
    display: "none",
  })}
`

const Search = styled.input`
  width: 50%;
  margin: 0 3em 0 0;
  padding: 0.5em;
  border-radius: 50px;
  border: none;
  ${mobile({
    display: "none",
  })}
`
const Amount = styled.div`
  display: flex;
  align-items: flex-end;
  opacity: 0.6;
`

const ShopSection = () => {
  useTitle("TIMGAD. | Shop")
  const location = useLocation()
  const [cat, setCat] = useState(location?.search.split("=")[1])
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("newest")
  const [search, setSearch] = useState("")

  const {
    data: products,
    isLoading,
    refetch,
  } = useListProductsQuery({
    category: cat ? cat : category,
    page,
    sort,
    search,
    limit: 6,
  })

  const handleFilters = (e) => {
    setCat("")
    setCategory(e.target.getAttribute("name"))
    refetch()
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  const handleSearch = (e) => {
    setCategory("all")
    setSearch(e.target.value)
    refetch()
  }

  const handlePageBackward = () => {
    setPage((prev) => prev - 1)
    refetch()
  }
  const handlePageForward = () => {
    setPage((prev) => prev + 1)
    refetch()
  }
  const handlePageNumber = (number) => {
    setPage(number)
    refetch()
  }

  let shopProducts
  if (isLoading) return (shopProducts = <PulseLoader size={10} />)
  shopProducts = !products.products?.length ? (
    <p>no product found</p>
  ) : (
    products.products.map((product) => (
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
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.totalProducts}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.gaming}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.allInOne}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.tablet}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.touchScreen}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.chromebook}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
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
            <Amount>&#40;{products.apple}&#41;</Amount>
          </Category>
        </CategoriesSection>
        <ManufacturerSection>
          <Title>Manufacturer</Title>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="hp" onClick={handleFilters}>
                hp
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.hp}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="dell" onClick={handleFilters}>
                dell
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.dell}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="acer" onClick={handleFilters}>
                acer
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.acer}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="asus" onClick={handleFilters}>
                asus
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.asus}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="lenovo" onClick={handleFilters}>
                lenovo
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.lenovo}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="apple" onClick={handleFilters}>
                apple
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.apple}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="fujitsu" onClick={handleFilters}>
                fujitsu
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.fujitsu}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="toshiba" onClick={handleFilters}>
                toshiba
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.toshiba}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="samsung" onClick={handleFilters}>
                samsung
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.samsung}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="lg" onClick={handleFilters}>
                lg
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.lg}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="condor" onClick={handleFilters}>
                condor
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.condor}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="msi" onClick={handleFilters}>
                msi
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.msi}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="wiseTech" onClick={handleFilters}>
                wiseTech
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.wiseTech}&#41;</Amount>
          </Category>
          <Category>
            <TextWrapper>
              <CheckBoxOutlinedIcon
                style={{
                  marginRight: ".2em",
                  fontSize: "1.2em",
                  opacity: ".6",
                }}
              />
              <Text name="honor" onClick={handleFilters}>
                honor
              </Text>
            </TextWrapper>
            <Amount>&#40;{products.honor}&#41;</Amount>
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
          <Search
            placeholder="Search product ..."
            value={search}
            onChange={handleSearch}
            autoFocus
          />
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
            <SortBySection>
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
