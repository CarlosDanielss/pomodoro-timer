import { styled } from "styled-components";

export const CountdownContainer = styled.div`
  max-width: 100%;
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 780px) {
    height: 180px;

    span {
      font-size: 80%;
      padding: 1.8rem 1rem;
    }
  }

  @media screen and (max-width: 680px) {
    height: 150px;

    span {
      font-size: 60%;
      padding: 1rem 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    height: 110px;

    span {
      font-size: 40%;
      line-height: 6rem;
      padding: 0.5rem 0.5rem;
    }
  }

  @media screen and (max-width: 460px) {
    height: 80px;

    span {
      line-height: 5rem;
      padding: 0.4rem 0.4rem;
    }
  }

  @media screen and (max-width: 425px) {
    span {
      font-size: 33%;
      line-height: 4rem;
      padding: 0.4rem 0.2rem;
    }
  }
`;

export const Separator = styled.p`
  font-size: 10rem;

  color: ${(props) => props.theme["green-500"]};

  @media screen and (max-width: 600px) {
    font-size: 60%;
  }

  @media screen and (max-width: 488px) {
    font-size: 40%;
  }
`;
