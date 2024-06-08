import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100svh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: ${(props) => props.theme["gray-800"]};

  @media screen and (max-width: 1230px) {
    margin: 5rem 2rem;
  }
`;
