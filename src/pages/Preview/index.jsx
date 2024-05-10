import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

import { Container, Content, Meta, Sinopsys } from "./styles"
import {
  FiArrowLeftCircle,
  FiClock,
  FiTrash,
  FiPlusCircle,
} from "react-icons/fi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { RatingShow } from "../../components/RatingShow"

export function Preview() {
  const [data, setData] = useState(null)
  const params = useParams()

  const navigate = useNavigate()

  function handleBackButton() {
    navigate(-1)
  }

  function handleNewButton() {
    navigate("/new")
  }

  async function handleRemove() {
    const confirm = window.confirm("Tem certeza que deseja excluir o filme?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchMovieNote()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText
              title="Voltar"
              $isactive
              icon={FiArrowLeftCircle}
              onClick={handleBackButton}
            />

            <div className="movie-title">
              <h2>{data.title}</h2>
              <RatingShow data={data.rating} />
            </div>

            <Meta>
              <img
                src="https://www.github.com/rafaverde.png"
                alt="User avatar"
              />
              <span>Por Rafael Valverde</span>
              <FiClock />
              <span>23/05/22 às 08:00</span>
            </Meta>

            {data.tags &&
              data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}

            <Sinopsys>
              <p>{data.description}</p>
            </Sinopsys>
            <div className="buttons">
              <Button
                title="Excluir Filme"
                $isdark
                icon={FiTrash}
                onClick={handleRemove}
              />
              <Button
                title="Adicionar Novo Filme"
                icon={FiPlusCircle}
                onClick={handleNewButton}
              />
            </div>
          </Content>
        </main>
      )}
    </Container>
  )
}
