// import { Container } from "./styles"

export function Rating({ icon: Icon, ...rest }) {
  return <Container {...rest}>{Icon && <Icon size={30} />}</Container>
}
