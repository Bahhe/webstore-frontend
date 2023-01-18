import { useState } from "react"
import styled from "styled-components"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../../services/firebase"
import { useAddNewProductMutation } from "../../../features/products/productsApiSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import useTitle from "../../../hooks/useTitle"
import { CircularProgress } from "@mui/material"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4em;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 500;
`
const Edit = styled.section`
  margin: 1em;
  border-radius: 1em;
  box-shadow: 0 0 20px #ccc;
  padding: 1em;
  width: 45em;
  overflow: hidden;
`

const Content = styled.section`
  display: flex;
`

const Left = styled.section`
  margin: 1em;
`

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 2em 0;
  width: 15em;
`

const ImageInput = styled.input``

const FormOne = styled.section`
  display: flex;
  flex-direction: column;
`
const FormTwo = styled.section`
  display: flex;
  flex-direction: column;
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
  gap: 5em;
`

const Label = styled.label`
  text-transform: capitalize;
  opacity: 0.6;
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
  background-color: transparent;
  box-shadow: 0 0 5px #ccc;
  &::placeholder {
    opacity: 0.2;
  }
`
const InStock = styled.input`
  margin: 1em 0;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Sections = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em;
`
const SectionName = styled.label`
  width: 7em;
  margin: 0.5em 0;
  font-weight: 500;
  text-transform: capitalize;
`
const SectionInput = styled.input`
  margin-right: 2em;
`
const Select = styled.select`
  margin: 0 0 2em 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 0.5em;
  font-weight: 500;
  background-color: transparent;
  box-shadow: 0 0 5px #ccc;
`
const Option = styled.option``

const CreateProductPage = () => {
  useTitle("TIMGAD. | Create Product")
  const navigate = useNavigate()

  const [addNewProduct, { isSuccess }] = useAddNewProductMutation()

  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState(true)
  const [slider, setSlider] = useState(false)
  const [secondSlider, setSecondSlider] = useState(false)
  const [categories, setCategories] = useState("other")
  const [cpu, setCpu] = useState("")
  const [ram, setRam] = useState("")
  const [disk, setDisk] = useState("")
  const [display, setDisplay] = useState("")
  const [vga, setVga] = useState("")
  const [brand, setBrand] = useState("acer")
  const [valid, setValid] = useState(false)

  const canSave = [file, description, cpu, ram, disk, vga, price].every(Boolean)

  useEffect(() => {
    if (canSave) {
      setValid(true)
    } else setValid(false)
  }, [cpu, description, disk, file, price, ram, vga, canSave])

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/products")
    }
  }, [isSuccess, navigate])

  const onSubmitClicked = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        console.log(
          "Upload is " +
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100 +
            "% done"
        )
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
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
                slider ? "slider" : null,
                secondSlider ? "secondSlider" : null,
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
            setTitle("")
            setDescription("")
            setPrice("")
            setSlider((prev) => !prev)
            setSecondSlider((prev) => !prev)
            setStock(true)
            setCpu("")
            setRam("")
            setDisk("")
            setDisplay("")
            setVga("")
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
                  value={price.replace(/\D/g, "")}
                  onChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))}
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
                    style={{ flexDirection: "row", alignItems: "center" }}
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
                    style={{ flexDirection: "row", alignItems: "center" }}
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
                  <CircularProgress style={{ margin: "0 auto" }} />
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
