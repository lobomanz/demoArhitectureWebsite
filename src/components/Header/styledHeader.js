import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: -40px;
  left: 0;
  width: calc(100% - 100px);
  z-index: 1000;
  background: #transparent;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: top 0.6s ease, opacity 0.6s ease;
  opacity: 0;

  &.show {
    top: 0;
    opacity: 1;
  }
`;

export const Logo = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-decoration: none;
  color: white;
  font-size: 22px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 300;
    text-decoration: none;
    color: white;
    padding: 0 8px;
  }
`;
