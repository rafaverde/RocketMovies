import styled from "styled-components"

export const Container = styled.button`
  background: none;
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme, $isactive }) =>
    $isactive === true ? theme.COLORS.PRIMARY_COLOR : theme.COLORS.GRAY_100};

  border: none;
  font-size: 16px;

  &:hover {
    opacity: 0.85;
  }
`
