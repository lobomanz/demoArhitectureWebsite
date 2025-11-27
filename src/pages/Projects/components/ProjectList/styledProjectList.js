import styled from "styled-components";

export const ProjectWrapper = styled.div`
  max-width: calc(93vw + 60px);
  width: 100%;
  margin-inline: auto;

  @media (min-width: 1024px) {
    padding: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
`;

export const ProjectCardWrapper = styled.div`
  width: 31vw;

  @media (max-width: 768px) {
    padding-inline: 15px;
    padding-top: 10px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  a {
    text-decoration: none;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
