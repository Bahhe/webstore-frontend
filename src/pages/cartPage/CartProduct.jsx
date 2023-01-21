import styled from "styled-components"
import { useDispatch } from "react-redux"
import { removeItem } from "../../features/carts/cartSlice"
import { useNavigate } from "react-router-dom"

const ProductContainer = styled.div``

const ProductsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0;
  padding: 1em 0 1em 0;
  height: 9em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`
const Product = styled.div`
  width: 100%;
`
const ProductWrapper = styled.div`
  display: flex;
`
const ProductImage = styled.div`
  width: 8em;
  height: 8em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 1em 0 0%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`
const ProductTitle = styled.div`
  text-transform: capitalize;
  font-size: 0.9em;
  cursor: pointer;
`
const Numbers = styled.div`
  height: 100%;
`
const NumbersWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Price = styled.div`
  font-weight: 600;
  font-size: 1.3em;
  margin: 0 0.5em;
  opacity: 0.7;
`
const EditingSection = styled.div`
  width: 100%;
  margin: 1em 0;
`
const Button = styled.button`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  padding: 1em;
  margin: 0 1em 0 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  cursor: pointer;
`

const CartProduct = ({ id, image, title, price, quantity = 0 }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onRemoveButtonClicked = async () => {
    dispatch(removeItem(id))
  }
  let content

  content = (
    <ProductContainer>
      <ProductsSection>
        <Product>
          <ProductWrapper>
            <ProductImage>
              <Image onClick={() => navigate(`/shop/product/${id}`)} src={image} />
            </ProductImage>
            <ProductTitle onClick={() => navigate(`/shop/product/${id}`)}>{title}</ProductTitle>
          </ProductWrapper>
        </Product>
        <Numbers>
          <NumbersWrapper>
            <Price>{price} DA</Price>
          </NumbersWrapper>
        </Numbers>
      </ProductsSection>
      <EditingSection>
        <Button onClick={onRemoveButtonClicked}>remove item</Button>
      </EditingSection>
    </ProductContainer>
  )

  return content
}

export default CartProduct
