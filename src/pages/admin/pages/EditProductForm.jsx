import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useUpdateProductMutation } from '../../../features/products/productsApiSlice'
import { useState, useEffect } from 'react'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../../services/firebase'
import CircularProgress from '@mui/material/CircularProgress'
import { Close } from '@mui/icons-material'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 500;
`
const Edit = styled.div`
  margin: 1em;
  border-radius: 1em;
  box-shadow: 0 0 20px #ccc;
  padding: 1em;
  width: 45em;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const ContentWrapper = styled.div`
  margin: 1em;
`
const FormOne = styled.section`
  flex: 1;
  margin: 1em;
  display: flex;
  flex-direction: column;
`
const FormTwo = styled.section`
  flex: 1;
  margin: 1em;
  display: flex;
  flex-direction: column;
`
const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 15em;
`

const ImageInput = styled.input`
  margin: 1em 0;
  width: 15em;
`

const Button = styled.button`
  font-size: 1.2em;
  padding: 0.5em 2em;
  font-weight: 500;
  text-transform: uppercase;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  box-shadow: 0 0 5px #4a4a4a;
  &:disabled {
    opacity: 0.5;
  }
`

const Form = styled.form`
  display: flex;
`

const Label = styled.label`
  text-transform: capitalize;
  opacity: 0.9;
  font-weight: 500;
  margin: 0 0 0.5em 0;
`

const Input = styled.input`
  margin-bottom: 1em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  width: 20em;
  font-size: 1em;
  padding: 0.5em 0 0.5em 0.5em;
  outline: none;
  opacity: 0.8;
  box-shadow: 0 0 5px #ccc;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

const InStock = styled.input`
  margin: 1em 0;
`

const Sections = styled.section`
  margin: 1em;
  display: flex;
  flex-direction: column;
`
const SectionName = styled.label`
  margin-right: 1em;
  width: 9em;
  text-transform: capitalize;
  font-weight: 500;
`
const SectionInput = styled.input`
  margin-right: 2em;
`
const Select = styled.select`
  margin: 0 0 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  padding: 1em;
  background-color: transparent;
  box-shadow: 0 0 5px #ccc;
`
const Option = styled.option``

const ProductImage = styled.img`
  width: 10em;
  aspect-ratio: 4/3;
  background-color: rgba(0, 0, 0, 0.03);
  margin: 1em;
`

const EditProductForm = ({ product }) => {
  const navigate = useNavigate()
  const [updateProduct, { isSuccess, isLoading }] = useUpdateProductMutation()

  const [showImage, setShowImage] = useState(false)
  const [file, setFile] = useState('')
  const [progress, setProgress] = useState(0)

  const [title, setTitle] = useState(product.title)
  const [description, setDescription] = useState(product.desc)
  const [price, setPrice] = useState(product.price)
  const [stock, setStock] = useState(product.inStock || false)
  const [slider, setSlider] = useState(
    product.section.includes('slider') || false
  )
  const [secondSlider, setSecondSlider] = useState(
    product.section.includes('secondSlider') || false
  )
  const [categories, setCategories] = useState(
    product.categories.includes('allInOne')
      ? 'allInOne'
      : product.categories.includes('gaming')
      ? 'gaming'
      : product.categories.includes('tablet')
      ? 'tablet'
      : product.categories.includes('apple')
      ? 'apple'
      : product.categories.includes('chromebook')
      ? 'chromebook'
      : product.categories.includes('touchScreen')
      ? 'touchScreen'
      : 'other'
  )
  const [cpu, setCpu] = useState(product.cpu)
  const [ram, setRam] = useState(product.ram)
  const [disk, setDisk] = useState(product.storage)
  const [display, setDisplay] = useState(product.display)
  const [vga, setVga] = useState(product.vga)
  const [brand, setBrand] = useState(
    product.categories.includes('dell')
      ? 'dell'
      : product.categories.includes('acer')
      ? 'acer'
      : product.categories.includes('apple')
      ? 'apple'
      : product.categories.includes('hp')
      ? 'hp'
      : product.categories.includes('lenovo')
      ? 'lenovo'
      : product.categories.includes('asus')
      ? 'asus'
      : product.categories.includes('hp')
      ? 'hp'
      : 'other'
  )

  const [valid, setValid] = useState(false)

  const canSave =
    [description, cpu, ram, disk, vga, price].every(Boolean) && !isLoading

  useEffect(() => {
    if (canSave) {
      setValid(true)
    } else setValid(false)
  }, [cpu, description, disk, price, ram, vga, canSave])
  useEffect(() => {
    if (isSuccess) {
      navigate('/admin/products')
    }
  }, [isSuccess, navigate])

  const onImageChanged = (e) => {
    setFile(e.target.files[0])
  }
  const onTitleChanged = (e) => {
    setTitle(e.target.value)
  }
  const onDescriptionChanged = (e) => {
    setDescription(e.target.value)
  }
  const onPriceChanged = (e) => {
    setPrice(e.target.value.replace(/\D/g, ''))
  }
  const onStockChanged = (e) => {
    setStock((prev) => !prev)
  }
  const onSliderChanged = () => {
    setSlider((prev) => !prev)
  }
  const onSecondSliderChanged = () => {
    setSecondSlider((prev) => !prev)
  }
  const onCategoriesChanged = (e) => {
    setCategories(e.target.value)
  }
  const onCpuChanged = (e) => {
    setCpu(e.target.value)
  }
  const onRamChanged = (e) => {
    setRam(e.target.value)
  }
  const onDiskChanged = (e) => {
    setDisk(e.target.value)
  }
  const onDisplayChanged = (e) => {
    setDisplay(e.target.value)
  }
  const onVgaChanged = (e) => {
    setVga(e.target.value)
  }
  const onBrandChanged = (e) => {
    setBrand(e.target.value)
  }

  const onSubmitClicked = async (e) => {
    e.preventDefault()
    if (file) {
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          console.log(
            'Upload is ' +
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100 +
              '% done'
          )
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const productObject = {
              id: product.id,
              title: title,
              desc: description,
              img: downloadURL,
              categories: [categories, brand],
              price: price,
              section: [
                slider ? 'slider' : '',
                secondSlider ? 'secondSlider' : '',
              ],
              inStock: stock,
              cpu: cpu,
              ram: ram,
              storage: disk,
              display: display,
              vga: vga,
            }
            updateProduct(productObject)
          })
        }
      )
    } else {
      const productObject = {
        id: product.id,
        title: title,
        desc: description,
        img: product.img,
        categories: [categories, brand],
        price: price,
        section: [slider ? 'slider' : '', secondSlider ? 'secondSlider' : ''],
        inStock: stock,
        cpu: cpu,
        ram: ram,
        storage: disk,
        display: display,
        vga: vga,
      }
      await updateProduct(productObject)
    }
    setFile('')
    setTitle('')
    setDescription('')
    setPrice('')
    setSlider(false)
    setSecondSlider(false)
    setStock(true)
    setCpu('')
    setRam('')
    setDisk('')
    setDisplay('')
    setVga('')
    navigate('/admin/products')
  }

  const content = (
    <Container>
      <Edit>
        <Header>
          <Title>edit</Title>
          <Button onClick={() => navigate('/admin/product/create')}>
            create
          </Button>
        </Header>
        <Content>
          <ContentWrapper>
            <Form onSubmit={onSubmitClicked}>
              <FormOne>
                <Label>title:</Label>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={onTitleChanged}
                />
                <Label>description:</Label>
                <Input
                  placeholder="desc"
                  value={description}
                  onChange={onDescriptionChanged}
                />
                <Label>price:</Label>
                <Input
                  type="number"
                  placeholder="$200"
                  value={price}
                  onChange={onPriceChanged}
                />
                <Label>cpu:</Label>
                <Input
                  placeholder="ryzen 5 5000"
                  value={cpu}
                  onChange={onCpuChanged}
                />
                <Label>ram:</Label>
                <Input
                  placeholder="$16GB 2666hz"
                  value={ram}
                  onChange={onRamChanged}
                />
                <Label>storage:</Label>
                <Input
                  placeholder="1TB SSD"
                  value={disk}
                  onChange={onDiskChanged}
                />
                <Label>dispaly:</Label>
                <Input
                  placeholder="1920 x 1080 IPS"
                  value={display}
                  onChange={onDisplayChanged}
                />
                <Label>vga:</Label>
                <Input
                  placeholder="Nvidea RTX 4090ti"
                  value={vga}
                  onChange={onVgaChanged}
                />
              </FormOne>
              <FormTwo>
                <Label>image:</Label>
                <ImageSection>
                  {showImage && (
                    <div
                      onClick={() => setShowImage((prev) => !prev)}
                      style={{
                        position: 'fixed',
                        top: '-200px',
                        left: '50%',
                        width: '70vw',
                        transform: 'translate(-50%, 50%)',
                        height: '70vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Close
                        style={{
                          color: 'white',
                          cursor: 'pointer',
                          position: 'fixed',
                          right: '2em',
                          top: '2em',
                        }}
                      />
                      <img
                        src={product.img}
                        style={{
                          maxWidth: '80%',
                        }}
                      />
                    </div>
                  )}
                  <ProductImage
                    onClick={() => setShowImage((prev) => !prev)}
                    src={product.img}
                  />
                </ImageSection>
                <Label>new image:</Label>
                <ImageInput type="file" id="file" onChange={onImageChanged} />
                <Label>category:</Label>
                <Select value={categories} onChange={onCategoriesChanged}>
                  <Option value="allInOne">all In One</Option>
                  <Option value="gaming">gaming pc</Option>
                  <Option value="tablet">tablet</Option>
                  <Option value="apple">apple</Option>
                  <Option value="chromebook">chromebook</Option>
                  <Option value="touchScreen">touchScreen</Option>
                  <Option value="other">other</Option>
                </Select>
                <Label htmlFor="brand">brand:</Label>
                <Select
                  id="brand"
                  name="brand"
                  value={brand}
                  onChange={onBrandChanged}
                >
                  <Option value="acer">acer</Option>
                  <Option value="dell">dell</Option>
                  <Option value="lenovo">lenovo</Option>
                  <Option value="apple">apple</Option>
                  <Option value="asus">asus</Option>
                  <Option value="hp">hp</Option>
                  <Option value="other">other</Option>
                </Select>
                <Label htmlFor="stock">stock:</Label>
                <InputWrapper>
                  <InStock
                    id="stock"
                    name="stock"
                    type="checkbox"
                    checked={stock}
                    value={stock}
                    onChange={onStockChanged}
                  />
                </InputWrapper>
                <Label htmlFor="sections">sections:</Label>
                <Sections id="sections" name="sections">
                  <InputWrapper>
                    <SectionName htmlFor="secondSlider">
                      secondSlider
                    </SectionName>
                    <SectionInput
                      id="secondSlider"
                      type="checkbox"
                      checked={secondSlider}
                      onChange={onSecondSliderChanged}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <SectionName htmlFor="slider">slider</SectionName>
                    <SectionInput
                      id="slider"
                      type="checkbox"
                      checked={slider}
                      onChange={onSliderChanged}
                    />
                  </InputWrapper>
                </Sections>
                {progress ? (
                  <>
                    <CircularProgress style={{ margin: '0 auto' }} />
                    <p style={{ margin: '.5em auto', fontSize: '.8em' }}>
                      {Math.round(progress)}%
                    </p>
                  </>
                ) : (
                  <Button disabled={!valid}>update</Button>
                )}
              </FormTwo>
            </Form>
          </ContentWrapper>
        </Content>
      </Edit>
    </Container>
  )

  return content
}

export default EditProductForm
