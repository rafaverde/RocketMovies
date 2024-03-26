import { FiSearch, FiFilm } from "react-icons/fi"

import { Container, Search, Profile, Brand } from "./styles"
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <Brand>
        <FiFilm />
        <h1>RocketMovies</h1>
      </Brand>
      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
      </Search>
      <Profile>
        <div>
          <strong>Rafael Valverde</strong>
          <span>sair</span>
        </div>
        <img src="https://www.github.com/rafaverde.png" alt="User avatar" />
      </Profile>
    </Container>
  )
}
