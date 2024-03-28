import { FiFilm, FiStar } from "react-icons/fi"
import { Container, NoteHeader, Sinopsys } from "./styles"
import { Tag } from "../Tag"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <NoteHeader>
        <FiFilm />
        <h1>{data.title}</h1>
        <div id="stars">
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
        </div>
      </NoteHeader>
      <Sinopsys>
        <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que
          tenta se...
        </p>
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
