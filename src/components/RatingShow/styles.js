import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`
