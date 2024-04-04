import { Container, Form, Background, Brand } from "./styles"
import {
  FiUser,
  FiMail,
  FiLock,
  FiFilm,
  FiArrowLeftCircle,
} from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignUp() {
  return (
    <Container>
      <Form>
        <Brand>
          <FiFilm />
          <h1>RocketMovies</h1>
        </Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="E-mail" icon={FiMail} type="text" />
        <Input placeholder="Senha" icon={FiLock} type="password" />
        <Button title="Cadastrar" />

        <Link to="/">
          <span>
            <FiArrowLeftCircle />
            Voltar para o Login
          </span>
        </Link>
      </Form>

      <Background />
    </Container>
  )
}
