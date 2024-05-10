import { FiFilm } from "react-icons/fi"
// import { FaStar } from "react-icons/fa"
import { RatingShow } from "../RatingShow"
import { Container, NoteHeader, Sinopsys } from "./styles"
import { Tag } from "../Tag"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <NoteHeader>
        <FiFilm />
        <h1>{data.title}</h1>
        <RatingShow data={data.rating} />
      </NoteHeader>
      <Sinopsys>
        <p>{data.description}</p>
      </Sinopsys>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
