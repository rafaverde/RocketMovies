import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const NoteHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 12px;
  }

  #stars {
    display: flex;
    gap: 10px;
  }

  #stars svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }
`

export const Sinopsys = styled.div`
  margin-top: 20px;

  p {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY_FONT};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: left;
    margin-bottom: 16px;
    line-height: 1.7;
  }
`
