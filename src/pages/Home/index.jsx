import { Container, Content } from "./styles"
import { FiPlus } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"
import { useEffect, useState } from "react"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function Home() {
  const { search } = useAuth()
  const [movieNotes, setMovieNotes] = useState([])

  const navigate = useNavigate()

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  function handleNewButton() {
    navigate("/new")
  }

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setMovieNotes(response.data)
    }

    fetchMovieNotes()
  }, [search])

  return (
    <Container>
      <Header />

      <Content>
        <header>
          <h1>Meus filmes</h1>
          <div className="plus-button">
            <Button
              title="Adicionar filme"
              icon={FiPlus}
              onClick={handleNewButton}
            />
          </div>
        </header>

        {movieNotes.map((movieNote) => (
          <Note
            key={String(movieNote.id)}
            data={movieNote}
            onClick={() => handlePreview(movieNote.id)}
          />
        ))}
      </Content>
    </Container>
  )
}
