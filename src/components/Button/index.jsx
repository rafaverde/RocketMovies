import { Container } from "./styles"

export function Button({
  title,
  isDark = false,
  loading = false,
  icon: Icon,
  ...rest
}) {
  return (
    <Container
      type="button"
      $isdark={isDark.toString()}
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
