import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 116px;

  padding: 0 124px;

  display: flex;
  align-items: center;
  gap: 50px;
  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Brand = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 10px;

  > h1,
  svg {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  > svg {
    font-size: 26px;
  }
`
export const Search = styled.div`
  height: 56px;
  width: 100%;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  > div {
    display: flex;
    flex-direction: column;

    margin-right: 1.6rem;

    font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
    text-align: right;
    line-height: 1;

    strong {
      text-wrap: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  img {
    width: 64px;
    height: 64px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 100px;
  }
`
