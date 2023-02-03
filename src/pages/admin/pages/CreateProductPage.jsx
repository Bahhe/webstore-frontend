import { useState } from 'react'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../../services/firebase'
import { useAddNewProductMutation } from '../../../features/products/productsApiSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useTitle from '../../../hooks/useTitle'
import { CircularProgress } from '@mui/material'
import {
  Container,
  Title,
  Edit,
  Content,
  Left,
  ImageSection,
  ImageInput,
  FormOne,
  FormTwo,
  Button,
  Form,
  Label,
  Input,
  InStock,
  Wrapper,
  Sections,
  SectionName,
  SectionInput,
  Select,
  Option,
} from './CreateProductPage.styles'

const CreateProductPage = () => {
  useTitle('TIMGAD. | Create Product')
  const navigate = useNavigate()

  const [addNewProduct, { isSuccess, isLoading }] = useAddNewProductMutation()

  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState(true)
  const [slider, setSlider] = useState(false)
  const [secondSlider, setSecondSlider] = useState(false)
  const [categories, setCategories] = useState('other')
  const [cpu, setCpu] = useState('')
  const [ram, setRam] = useState('')
  const [disk, setDisk] = useState('')
  const [display, setDisplay] = useState('')
  const [vga, setVga] = useState('')
  const [brand, setBrand] = useState('acer')
  const [valid, setValid] = useState(false)

  const canSave =
    [file, description, cpu, ram, disk, vga, price].every(Boolean) && !isLoading

  useEffect(() => {
    if (canSave) {
      setValid(true)
    } else setValid(false)
  }, [cpu, description, disk, file, price, ram, vga, canSave])

  useEffect(() => {
    if (isSuccess) {
      navigate('/admin/products')
    }
  }, [isSuccess, navigate])

  const onSubmitClicked = (e) => {
    e.preventDefault()
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
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            const product = {
              title: title,
              desc: description,
              img: downloadURL,
              categories: [categories, brand],
              price: price,
              section: [
                slider ? 'slider' : null,
                secondSlider ? 'secondSlider' : null,
              ],
              inStock: stock,
              cpu: cpu,
              ram: ram,
              storage: disk,
              display: display,
              vga: vga,
            }
            addNewProduct(product)
          })
          .then(() => {
            setFile(null)
            setTitle('')
            setDescription('')
            setPrice('')
            setSlider((prev) => !prev)
            setSecondSlider((prev) => !prev)
            setStock(true)
            setCpu('')
            setRam('')
            setDisk('')
            setDisplay('')
            setVga('')
          })
      }
    )
  }

  return (
    <Container>
      <Edit>
        <Title>create</Title>
        <Content>
          <Left>
            <Form onSubmit={onSubmitClicked}>
              <FormOne>
                <Label>title:</Label>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Label>description:</Label>
                <Input
                  placeholder="desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Label>price:</Label>
                <Input
                  type="number"
                  placeholder="$200"
                  value={price.replace(/\D/g, '')}
                  onChange={(e) => setPrice(e.target.value.replace(/\D/g, ''))}
                />
                <Label>cpu:</Label>
                <Input
                  placeholder="ryzen 5 5000"
                  value={cpu}
                  onChange={(e) => setCpu(e.target.value)}
                />
                <Label>ram:</Label>
                <Input
                  placeholder="$16GB 2666hz"
                  value={ram}
                  onChange={(e) => setRam(e.target.value)}
                />
                <Label>storage:</Label>
                <Input
                  placeholder="1TB SSD"
                  value={disk}
                  onChange={(e) => setDisk(e.target.value)}
                />
                <Label>dispaly:</Label>
                <Input
                  placeholder="1920 x 1080 IPS"
                  value={display}
                  onChange={(e) => setDisplay(e.target.value)}
                />
                <Label>vga:</Label>
                <Input
                  placeholder="Nvidea RTX 4090ti"
                  value={vga}
                  onChange={(e) => setVga(e.target.value)}
                />
              </FormOne>
              <FormTwo>
                <Label htmlFor="file">image:</Label>
                <ImageSection>
                  <ImageInput
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </ImageSection>
                <Label>categories:</Label>
                <Select
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                >
                  <Option value="allInOne">all in one</Option>
                  <Option value="chromebook">chromebook</Option>
                  <Option value="gaming">gaming pc</Option>
                  <Option value="apple">apple</Option>
                  <Option value="tablet">tablet</Option>
                  <Option value="touchScreen">touchScreen</Option>
                  <Option value="other">other</Option>
                </Select>
                <Label>brand:</Label>
                <Select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <Option value="apple">apple</Option>
                  <Option value="acer">acer</Option>
                  <Option value="dell">dell</Option>
                  <Option value="hp">hp</Option>
                  <Option value="lenovo">lenovo</Option>
                  <Option value="asus">asus</Option>
                  <Option value="hp">hp</Option>
                  <Option value="other">other</Option>
                </Select>
                <Wrapper>
                  <Label>stock:</Label>
                  <InStock
                    type="checkbox"
                    value={stock}
                    checked={stock}
                    onChange={() => setStock((prev) => !prev)}
                  />
                </Wrapper>
                <Label>sections:</Label>
                <Sections>
                  <Wrapper
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <SectionName htmlFor="secondSlider">
                      showcase one
                    </SectionName>
                    <SectionInput
                      id="secondSlider"
                      type="checkbox"
                      value={secondSlider}
                      onChange={() => setSecondSlider((prev) => !prev)}
                    />
                  </Wrapper>
                  <Wrapper
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <SectionName htmlFor="slider">showcase two</SectionName>
                    <SectionInput
                      id="slider"
                      type="checkbox"
                      value={slider}
                      onChange={() => setSlider((prev) => !prev)}
                    />
                  </Wrapper>
                </Sections>
                {progress ? (
                  <>
                    <CircularProgress style={{ margin: '0 auto' }} />
                    <p style={{ margin: '.5em auto', fontSize: '.8em' }}>
                      {Math.round(progress)}%
                    </p>
                  </>
                ) : (
                  <Button disabled={!valid}>create</Button>
                )}
              </FormTwo>
            </Form>
          </Left>
        </Content>
      </Edit>
    </Container>
  )
}

export default CreateProductPage
