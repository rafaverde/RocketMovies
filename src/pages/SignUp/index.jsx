import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

import { Container, Form, Background, Brand } from "./styles"
import {
  FiUser,
  FiMail,
  FiLock,
  FiFilm,
  FiArrowLeftCircle,
} from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todas as informações!")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar. Tente novamente mais tarde.")
        }
      })
  }

  function handleBackToLogin() {
    navigate("/")
  }

  return (
    <Container>
      <Form>
        <Brand>
          <FiFilm />
          <h1>RocketMovies</h1>
        </Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          icon={FiMail}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          icon={FiLock}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp} />

        <ButtonText
          title="Voltar para o Login"
          icon={FiArrowLeftCircle}
          onClick={handleBackToLogin}
          className="back-button"
        />
      </Form>

      <Background />
    </Container>
  )
}
