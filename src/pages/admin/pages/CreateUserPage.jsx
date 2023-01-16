import styled from "styled-components"
import UploadIcon from "@mui/icons-material/Upload"
import useTitle from "../../../hooks/useTitle"

const Container = styled.main`
  margin: 10em 10em 0 15%;
  width: 100%;
`
const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Title = styled.h1`
  text-transform: capitalize;
  font-size: 2em;
  font-weight: 500;
`
const Edit = styled.section`
  width: 100%;
  margin: 1em;
  border-radius: 1em;
  box-shadow: 2px 6px 5px 3px rgba(0, 0, 0, 0.15);
  padding: 1em;
`

const Content = styled.form`
  display: flex;
`
const Right = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const Left = styled.section`
  margin: 1em;
`

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const ImageInput = styled.input`
  display: none;
`

const Upload = styled.div``

const FileUpload = styled.label``

const ProfilePic = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 1em;
  margin-right: 1em;
  object-fit: contain;
`

const ButtonSection = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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

const Form = styled.section`
  display: flex;
  flex-direction: column;
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

const CreateUserPage = () => {
  useTitle("TIMGAD. | Create User")
  return (
    <Container>
      <Header>
        <Title>create user</Title>
      </Header>
      <Edit>
        <Title>create</Title>
        <Content>
          <Left>
            <Form>
              <Label>first name</Label>
              <Input placeholder="baha eddine" />
              <Label>last name</Label>
              <Input placeholder="guerri" />
              <Label>email</Label>
              <Input placeholder="marchelldteach@gmail.com" />
              <Label>phone number</Label>
              <Input placeholder="+213 666 103 710" />
              <Label>address</Label>
              <Input placeholder="batna" />
            </Form>
          </Left>
          <Right>
            <ImageSection>
              <ProfilePic src="https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=612x612&w=0&k=20&c=9kE777krx5mrFHsxx02v60ideRWvIgI1RWzR1X4MG2Y=" />
              <Upload>
                <FileUpload htmlFor="file">
                  <UploadIcon style={{ fontSize: "2em" }} />
                </FileUpload>
                <ImageInput type="file" id="file" />
              </Upload>
            </ImageSection>
            <ButtonSection>
              <Button>create</Button>
            </ButtonSection>
          </Right>
        </Content>
      </Edit>
    </Container>
  )
}

export default CreateUserPage
