import { Container } from "./styles"
import { FaStar } from "react-icons/fa"

export function RatingShow({ data, ...rest }) {
  return (
    <Container {...rest}>
      {[...Array(data)].map((_, index) => (
        <label key={index}>
          <FaStar size={24} />
        </label>
      ))}
    </Container>
  )
}
