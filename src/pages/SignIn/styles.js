import styled from "styled-components"
import backgroundImg from "../../assets/bg-signIn.jpg"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  width: 50%;
  padding: 0 160px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    margin-top: 120px;

    &:hover {
      opacity: 0.9;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`

export const Brand = styled.div`
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
