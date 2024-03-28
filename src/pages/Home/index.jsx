import { Container, Content } from "./styles"
import { FiPlus } from "react-icons/fi"

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
            <Button title="Adicionar filme" icon={FiPlus} />
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
