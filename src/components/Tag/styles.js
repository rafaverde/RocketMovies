import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.4rem;

  padding: 5px 14px;
  margin: 6px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GREY_300};
`
