import { FiArrowLeftCircle } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"

export function New() {
  return (
    <Container>
      <Header />

      <Content>
        <form>
          <header>
            <Link to="/">
              <ButtonText title="Voltar" $isactive icon={FiArrowLeftCircle} />
            </Link>
            <h2>Novo Filme</h2>
          </header>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <Textarea placeholder="Observação" />

          <footer>
            <h3>Marcadores</h3>
            <div className="tags">
              <NoteItem value="Sci-Fi"></NoteItem>
              <NoteItem value="Drama"></NoteItem>

              <NoteItem isNew placeholder="Nova Tag"></NoteItem>
            </div>
            <div className="buttons">
              <Button title="Excluir Filme" $isdark />
              <Button title="Salvar Alterações" />
            </div>
          </footer>
        </form>
      </Content>
    </Container>
  )
}
