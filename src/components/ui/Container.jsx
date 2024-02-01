import styled from "styled-components";

export default function Container({ children }) {
  return <StyledContainer> {children} </StyledContainer>;
}

const StyledContainer = styled.div`
  margin-bottom: 48px;
  border-top: 0.4px solid #4a222b;
`;
