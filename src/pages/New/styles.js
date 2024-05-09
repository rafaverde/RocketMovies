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
  width: 100%;

  grid-area: content;
  overflow-y: auto;

  padding: 50px 124px;

  h2 {
    font-size: 36px;
    margin-top: 24px;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 40px;

    > div {
      display: flex;
      gap: 40px;
    }

    > footer {
      h3 {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 24px;
      }

      > .tags {
        display: flex;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;

        padding: 16px;
        margin-bottom: 40px;

        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      }

      > .buttons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 40px;
        max-width: 100%;
        margin: 0 auto;

        button {
          max-width: 40%;
          font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
        }
      }
    }
  }
`
