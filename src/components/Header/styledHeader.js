import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: -40px;
  left: 0;
  width: calc(100% - 100px);
  z-index: 1000;

  /* Header glass (unchanged) */
  background: rgba(255, 255, 255, 0.12);
  
  -webkit-backdrop-filter: blur(5px);


  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: top 0.6s ease, opacity 0.6s ease;
  opacity: 0;
  isolation: isolate;

  &.header-blur {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

  &.show {
    top: 0;
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      900px 120px at 20% 0%,
      rgba(255, 255, 255, 0.22),
      rgba(255, 255, 255, 0.05) 55%,
      transparent 75%
    );
    opacity: 0.9;
  }

  .logo {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 22px;
    position: relative;
    z-index: 1100;
  }

  .navigation {
    display: flex;
    gap: 30px;
    position: relative;
    z-index: 1100;

    a {
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 500;
      text-decoration: none;
      color: #f5f5f5;
      padding: 0 8px;
    }
  }

  /* --- Mobile --- */
  .hamburger {
    display: none;
    background: transparent;
    border: 0;
    padding: 8px;
    cursor: pointer;
    position: relative;
    z-index: 1100;
  }

  .hamburger .bar {
    position: absolute;
    right: 30px;
    width: 26px;
    height: 2px;
    background: #f5f5f5;
    border-radius: 999px;
    transition: transform 240ms ease, opacity 160ms ease;
  }

  .hamburger .bar:nth-child(2) {
    margin-top: -16px;
  }

  .hamburger .bar:nth-child(3) {
    margin-top: 16px;
  }

  .hamburger.is-open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    top: -1px;
  }

  .hamburger.is-open .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.is-open .bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
    top: -3px;
  }

  .mobile-overlay {
    display: none;
  }

  @media (max-width: 1080px) {
    width: 100%;
    padding: 12px 18px;

    .navigation {
      display: none;
    }

    .hamburger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* 🔹 Overlay: slightly more blur than header */
    .mobile-overlay {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 1050;
      pointer-events: none;
      opacity: 0;
      transition: opacity 220ms ease;

      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .mobile-overlay.open {
      pointer-events: auto;
      opacity: 1;
    }

    /* 🔹 Panel: almost as blurry as header, slightly stronger */
    .mobile-panel {
      position: absolute;
      inset: 0;
      height: 100vh;
      width: 100vw;

      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);

      transform-style: preserve-3d;
      transform: translateX(110%) perspective(800px);
      transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1);

      padding: 84px 18px 18px;
    }

    .mobile-overlay.open .mobile-panel {
      transform: translateX(0) perspective(800px);
    }

    .mobile-links {
      display: flex;
      flex-direction: column;
      gap: 14px;
      
    }

    .mobile-links a,
    .mobile-links button {
    text-decoration:none;
      font-family: system-ui;
      font-size: 20px;
      text-align: left;
      color: #f5f5f5;
      background: transparent;
      border: 0;
      padding: 12px 12px;
      cursor: pointer;
    }
  }
`;
