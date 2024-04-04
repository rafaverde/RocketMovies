import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 56px;

  background-color: ${({ theme, $isnew }) =>
    $isnew === "true" ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GREY_300};

  border: ${({ theme, $isnew }) =>
    $isnew === "true" ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 24px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    font-size: 24px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
