import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 50px 0;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  padding: 0 124px;

  .movie-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 24px;

    > svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }
  }

  h2 {
    font-size: 36px;
    margin-right: 16px;
  }

  > .buttons {
    display: flex;
    align-items: center;
    gap: 40px;

    margin-top: 40px;
    padding: 40px 0;

    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    button {
      font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
    }
  }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 24px 0 40px;

  > img {
    width: 16px;
    height: 16px;

    border-radius: 20px;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`

export const Sinopsys = styled.div`
  margin-top: 40px;

  p {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
    margin-bottom: 16px;
    line-height: 1.7;
  }
`
