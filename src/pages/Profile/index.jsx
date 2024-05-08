import { useAuth } from "../../hooks/auth"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./style"
import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState(user.oldPassword)
  const [newPassword, setNewPassword] = useState(user.newPassword)

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    if (oldPassword && !newPassword) {
      return alert("É necessário digitar a nova senha!")
    }

    const updated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    }
    
    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate}></Button>
      </Form>
    </Container>
  )
}
