import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

import { Container, Content } from "./styles"

import { FiArrowLeftCircle } from "react-icons/fi"
import { FaStar } from "react-icons/fa"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"

export function New() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState(null)
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    if (!newTag) {
      return alert("Genêro do filme não pode ser vazio!")
    }

    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag, index) => index !== deleted))
  }

  function handleBackButton() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title || !rating) {
      return alert("É preciso digitar o nome do filme e sua nota!")
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag digitada e não adicionou. Clique em (+)"
      )
    }

    const movieNote = { title, rating, description, tags }
    await api.post("/notes", movieNote)

    alert("Filme cadastrado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <Content>
        <form>
          <header>
            <ButtonText
              title="Voltar"
              $isactive
              icon={FiArrowLeftCircle}
              onClick={handleBackButton}
            />
            <h2>Novo Filme</h2>
          </header>

          <div>
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="rating">
              {[...Array(5)].map((star, index) => {
                const currentRate = index + 1
                return (
                  <label className="star-container" key={index}>
                    <input
                      type="radio"
                      name="rate"
                      value={currentRate}
                      onClick={() => setRating(currentRate)}
                      className="ratingRadio"
                    />

                    <FaStar
                      size={40}
                      className={
                        currentRate <= rating ? "star-enabled" : "star-disabled"
                      }
                    ></FaStar>
                  </label>
                )
              })}
            </div>
            {/* <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            /> */}
          </div>
          <Textarea
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />

          <footer>
            <h3>Gêneros</h3>
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(index)
                  }}
                ></NoteItem>
              ))}

              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              ></NoteItem>
            </div>
            <div className="buttons">
              <Button title="Salvar Alterações" onClick={handleNewNote} />
            </div>
          </footer>
        </form>
      </Content>
    </Container>
  )
}
