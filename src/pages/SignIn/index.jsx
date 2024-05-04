import { Container, Form, Background, Brand } from "./styles"
import { FiMail, FiLock, FiFilm } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useState } from "react"
import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <Brand>
          <FiFilm />
          <h1>RocketMovies</h1>
        </Brand>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
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
        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  )
}
