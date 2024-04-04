import { FiSearch, FiFilm } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Search, Profile, Brand } from "./styles"
import { Input } from "../Input"

export function Header() {
  return (
    <Container>
      <Brand to="/">
        <FiFilm />
        <h1>RocketMovies</h1>
      </Brand>
      <Search>
        <Input icon={FiSearch} placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <div>
          <Link to="/profile">
            <strong>Rafael Valverde</strong>
          </Link>
          <span>sair</span>
        </div>
        <Link to="/profile">
          <img src="https://www.github.com/rafaverde.png" alt="User avatar" />
        </Link>
      </Profile>
    </Container>
  )
}
