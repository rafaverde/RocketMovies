import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-areas:
    "header"
    "content";
`

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  overflow-y: scroll;

  padding: 50px 124px;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-top: 0;
    }
  }
`
