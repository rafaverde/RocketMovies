import { Container, Form, Background, Brand } from "./styles"
import { FiMail, FiLock, FiFilm } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <Form>
        <Brand>
          <FiFilm />
          <h1>RocketMovies</h1>
        </Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" icon={FiMail} type="text" />
        <Input placeholder="Senha" icon={FiLock} type="password" />
        <Button title="Entrar" />

        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
