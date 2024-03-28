import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  font-family: ${({ theme }) => theme.FONTS.SECONDARY_FONT};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
