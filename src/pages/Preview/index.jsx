import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

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
  const { user } = useAuth()

  const [data, setData] = useState(null)
  const [dataBaseDate, setDataBaseDate] = useState("")
  const [metaDate, setMetaDate] = useState("")
  const [metaHour, setMetaHour] = useState("")

  const params = useParams()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

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
      setDataBaseDate(response.data)
    }

    fetchMovieNote()
  }, [])

  useEffect(() => {
    function formatData() {
      if (dataBaseDate) {
        const initialDate = dataBaseDate.created_at
        const dateSplit = initialDate.split(" ")
        const finalDate = dateSplit[0].split("-").reverse().join("/")
        setMetaDate(finalDate)
        setMetaHour(dateSplit[1])
      }
    }

    formatData()
  }, [dataBaseDate])

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
              <img src={avatarURL} alt={user.name} />
              <span>Por {user.name}</span>
              <FiClock />
              <span>{`${metaDate} às ${metaHour}`}</span>
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
