import { Container, Content } from "./styles"
import { FiPlus } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <header>
          <h1>Meus filmes</h1>
          <div className="plus-button">
            <Link to="/new">
              <Button title="Adicionar filme" icon={FiPlus} />
            </Link>
          </div>
        </header>

        <Note
          data={{
            title: "Interstellar",
            tags: [
              { id: "1", name: "Sci-fi" },
              { id: "2", name: "Drama" },
            ],
          }}
        />
        <Note
          data={{
            title: "Interstellar",
            tags: [
              { id: "1", name: "Sci-fi" },
              { id: "2", name: "Drama" },
            ],
          }}
        />
        <Note
          data={{
            title: "Interstellar",
            tags: [
              { id: "1", name: "Sci-fi" },
              { id: "2", name: "Drama" },
            ],
          }}
        />
      </Content>
    </Container>
  )
}
