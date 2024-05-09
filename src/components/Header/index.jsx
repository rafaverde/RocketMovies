import { FiSearch, FiFilm } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { ButtonText } from "../ButtonText"

import { Container, Search, Profile, Brand } from "./styles"
import { Input } from "../Input"

export function Header() {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function handleSignOut() {
    navigate("/")
    signOut()
  }

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
            <strong>{user.name}</strong>
          </Link>
          <ButtonText title="sair" onClick={handleSignOut}></ButtonText>
        </div>
        <Link to="/profile">
          <img src={avatarURL} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  )
}
