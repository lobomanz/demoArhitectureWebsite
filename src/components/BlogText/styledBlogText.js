import styled from "styled-components";

export const BlogWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 40px;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
`;
