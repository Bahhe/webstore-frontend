import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useUpdateProductMutation } from "../../../features/products/productsApiSlice"
import { useState } from "react"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"
import app from "../../../services/firebase"
import CircularProgress from "@mui/material/CircularProgress"

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
  text-transform: capitalize;
  font-size: 2em;
  font-weight: 500;
`
const Edit = styled.div`
  margin: 1em;
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 1em;
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
`

const ImageInput = styled.input`
  margin: 1em 0;
`

const Button = styled.button`
  font-size: 1.2em;
  padding: 0.5em 2em;
  font-weight: 500;
  text-transform: capitalize;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 1em;
  cursor: pointer;
`

const Form = styled.form`
  display: flex;
`

const Label = styled.label`
  text-transform: capitalize;
  opacity: 0.6;
  font-weight: 500;
`

const Input = styled.input`
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid black;
  width: 20em;
  font-size: 1em;
  padding: 0.5em 0 0.5em 0.5em;
  outline: none;
  opacity: 0.8;
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
  margin: 1em 0 2em 0;
  border: none;
  border-radius: 50px;
  padding: 1em;
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
  const [updateProduct] = useUpdateProductMutation()

  const [file, setFile] = useState("")
  const [progress, setProgress] = useState(0)

  const [title, setTitle] = useState(product.title)
  const [description, setDescription] = useState(product.desc)
  const [price, setPrice] = useState(product.price)
  const [stock, setStock] = useState(product.inStock || false)
  const [slider, setSlider] = useState(
    product.section.includes("slider") || false
  )
  const [secondSlider, setSecondSlider] = useState(
    product.section.includes("secondSlider") || false
  )
  const [categories, setCategories] = useState(
    product.categories.includes("allInOne")
      ? "allInOne"
      : product.categories.includes("gaming")
      ? "gaming"
      : product.categories.includes("tablet")
      ? "tablet"
      : product.categories.includes("apple")
      ? "apple"
      : product.categories.includes("chromebook")
      ? "chromebook"
      : product.categories.includes("touchScreen")
      ? "touchScreen"
      : product.categories.includes("all")
      ? "all"
      : "all"
  )
  const [cpu, setCpu] = useState(product.cpu)
  const [ram, setRam] = useState(product.ram)
  const [disk, setDisk] = useState(product.storage)
  const [display, setDisplay] = useState(product.display)
  const [vga, setVga] = useState(product.vga)
  const [brand, setBrand] = useState(
    product.categories.includes("dell")
      ? "dell"
      : product.categories.includes("acer")
      ? "acer"
      : product.categories.includes("toshiba")
      ? "toshiba"
      : product.categories.includes("apple")
      ? "apple"
      : product.categories.includes("hp")
      ? "hp"
      : product.categories.includes("lenovo")
      ? "lenovo"
      : product.categories.includes("samsung")
      ? "samsung"
      : product.categories.includes("lg")
      ? "lg"
      : product.categories.includes("honor")
      ? "honor"
      : product.categories.includes("msi")
      ? "msi"
      : product.categories.includes("condor")
      ? "condor"
      : product.categories.includes("fujitsu")
      ? "fujitsu"
      : product.categories.includes("asus")
      ? "asus"
      : product.categories.includes("wiseTech")
      ? "wiseTech"
      : "all"
  )

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
    setPrice(e.target.value.replace(/\D/g, ""))
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
    alert("please wait for image to upload...")
    e.preventDefault()
    if (file) {
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          console.log("Upload is " + progress + "% done")
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused")
              break
            case "running":
              console.log("Upload is running")
              break
            default:
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              const productObject = {
                id: product.id,
                title: title,
                desc: description,
                img: downloadURL,
                categories: [categories, brand],
                price: price,
                section: [
                  slider ? "slider" : "",
                  secondSlider ? "secondSlider" : "",
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
            .then(() => {
              setFile("")
              setTitle("")
              setDescription("")
              setPrice("")
              setSlider((prev) => !prev)
              setSecondSlider((prev) => !prev)
              setStock((prev) => !prev)
              setCpu("")
              setRam("")
              setDisk("")
              setDisplay("")
              setVga("")
            })
            .then(() => {
              navigate("/admin/products")
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
        section: [slider ? "slider" : "", secondSlider ? "secondSlider" : ""],
        inStock: stock,
        cpu: cpu,
        ram: ram,
        storage: disk,
        display: display,
        vga: vga,
      }

      await updateProduct(productObject)
      setFile("")
      setTitle("")
      setDescription("")
      setPrice("")
      setSlider((prev) => !prev)
      setSecondSlider((prev) => !prev)
      setStock((prev) => !prev)
      setCpu("")
      setRam("")
      setDisk("")
      setDisplay("")
      setVga("")
      navigate("/admin/products")
    }
  }

  const content = (
    <Container>
      <Edit>
        <Header>
          <Title>edit</Title>
          <Button onClick={() => navigate("/admin/product/create")}>
            create
          </Button>
        </Header>
        <Content>
          <ContentWrapper>
            <Form onSubmit={onSubmitClicked}>
              <FormOne>
                <Label>title</Label>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={onTitleChanged}
                />
                <Label>description</Label>
                <Input
                  placeholder="desc"
                  value={description}
                  onChange={onDescriptionChanged}
                />
                <Label>price</Label>
                <Input
                  placeholder="$200"
                  value={price}
                  onChange={onPriceChanged}
                />
                <Label>cpu</Label>
                <Input
                  placeholder="ryzen 5 5000"
                  value={cpu}
                  onChange={onCpuChanged}
                />
                <Label>ram</Label>
                <Input
                  placeholder="$16GB 2666hz"
                  value={ram}
                  onChange={onRamChanged}
                />
                <Label>storage</Label>
                <Input
                  placeholder="1TB SSD"
                  value={disk}
                  onChange={onDiskChanged}
                />
                <Label>dispaly</Label>
                <Input
                  placeholder="1920 x 1080 IPS"
                  value={display}
                  onChange={onDisplayChanged}
                />
                <Label>vga</Label>
                <Input
                  placeholder="Nvidea RTX 4090ti"
                  value={vga}
                  onChange={onVgaChanged}
                />
              </FormOne>
              <FormTwo>
                <Label>image</Label>
                <ImageSection>
                  <ProductImage src={product.img} />
                </ImageSection>
                <Label>new image</Label>
                <ImageInput type="file" id="file" onChange={onImageChanged} />
                <Label>category</Label>
                <Select value={categories} onChange={onCategoriesChanged}>
                  <Option value="all">all</Option>
                  <Option value="allInOne">all In One</Option>
                  <Option value="gaming">gaming pc</Option>
                  <Option value="tablet">tablet</Option>
                  <Option value="apple">apple</Option>
                  <Option value="chromebook">chromebook</Option>
                  <Option value="touchScreen">touchScreen</Option>
                </Select>
                <Label htmlFor="brand">brand</Label>
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
                  <Option value="toshiba">toshiba</Option>
                  <Option value="fujitsu">fujitsu</Option>
                  <Option value="asus">asus</Option>
                  <Option value="msi">msi</Option>
                  <Option value="samsung">samsung</Option>
                  <Option value="lg">lg</Option>
                  <Option value="honor">honor</Option>
                  <Option value="condor">condor</Option>
                  <Option value="wiseTech">wiseTech</Option>
                </Select>
                <Label htmlFor="stock">stock</Label>
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
                <Label htmlFor="sections">sections</Label>
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
                <Button>
                  {progress ? (
                    <CircularProgress
                      style={{ color: "white" }}
                      variant="determinate"
                      value={progress}
                    />
                  ) : (
                    "update"
                  )}
                </Button>
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
