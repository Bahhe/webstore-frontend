import styled from 'styled-components'
import { mobile } from '../../assests/globalStyles/responsive'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5em 0;
  display: flex;
  gap: 2em;
  ${mobile({
    flexDirection: 'column',
    width: '100%',
  })}
`
const FilterSection = styled.div`
  flex: 1;
  ${mobile({
    display: 'none',
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
  &:hover {
    color: orange;
  }
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '90%',
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
    width: '8em',
  })}
`
const Options = styled.option``

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  })}
`

const ProductsTitle = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 0 1em 0;
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
  ${mobile({
    width: '80%',
  })}
`

const Search = styled.input`
  width: 100%;
  height: 3em;
  padding: 0.5em;
  border: none;
  outline: none;
`

export {
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
}
