import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter:blur(2px);
  animation: fadeIn 0.2s ease forwards;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }


  .btn {
    position: relative;
    margin: 10px auto 0;
    padding: 12px 42px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;

    color: #ffffff;
    font-size: 16px;
    font-weight: 600;

    background: rgba(30, 30, 30, 0.35);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

    &.close
    {
        z-index: 50000;
        right: 10px;
        top: -20px;
        position: absolute;
        padding: 10px 15px;
        transition: transform 0.15s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        @media (max-width: 1080px) {
        right:-10px;
        top:20px;
        }
    }
  }

  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.28)
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  .btn::after {
    content: "";
    position: absolute;
    top: -60%;
    left: -30%;
    width: 160%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.35),
      transparent 60%
    );
    transform: rotate(25deg);
    opacity: 0.35;
    transition: transform 0.6s ease;
    pointer-events: none;
  }

  .btn:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.32);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.22);
  }

  .btn:hover::before {
    opacity: 1;
  }

  .btn:hover::after {
    transform: translateX(20%) rotate(25deg);
  }

  .btn:active {
    transform: translateY(0px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  }

  .btn:focus-visible {
    outline: 2px solid rgba(99, 94, 84, 0.9);
    outline-offset: 3px;
  }
`;

/* ✅ Liquid Glass wrapper: 80vw x 70vh */
export const LiquidGlass = styled.div`
  /* sizing */
  width: 80vw;
  height: 70vh;

  /* safety caps */
  max-width: 1100px;
  max-height: 800px;

  /* small screens */
  @media (max-width: 1080px) {
    width: 100vw;
    height: 100vh;
  --border-radius: 0px;

  }

  --border-radius: 32px;
  --glass-padding: 40px;

  position: relative;
  border-radius: var(--border-radius);
  padding: var(--glass-padding);
  overflow: hidden;

  /* optional: keep your “grab” feel */
  cursor: default;

  animation: scaleIn 0.25s ease forwards;

  @keyframes scaleIn {
    from {
      transform: scale(0.96);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

/* layer 0 */
export const GlassBend = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: var(--border-radius);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  /* uses the inline svg filter id */
  filter: url(#glass-blur);
`;

/* layer 1 */
export const GlassFace = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: var(--border-radius);

  background: rgba(245, 244, 240, 0.55);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08);
`;

/* layer 2 */
export const GlassEdge = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: var(--border-radius);

`;

/* actual content on top */
export const GlassContent = styled.div`
  position: relative;
  z-index: 3;

  height: 100%;
  width: 100%;

  display: flex;
  gap: 24px;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ModalLeft = styled.div`
  width: 34%;
  height: 100%;
  overflow: hidden;
  border-radius: 18px;

  display: flex;

  @media (max-width: 1080px) {
    width: 100%;
    height: 30%;
    display:none;
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 18px;
      user-select: none;
      pointer-events: none;
    }
  }
`;

export const ModalRight = styled.div`
  width: 66%;
  height: 100%;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 16px;

  @media (max-width: 1080px) {
    width: 100%;
    height: 70%;
    padding: 10px;
  }

  .contact-title {
    margin: 0 0 12px;
    text-align: center;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* ✅ LIQUID GLASS BUTTON */
  .btn {
    position: relative;
    margin: 10px auto 0;
    padding: 12px 42px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;

    color: #ffffff;
    font-size: 16px;
    font-weight: 600;

    background: rgba(30, 30, 30, 0.35);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    overflow: hidden;
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

    &.close
    {
        padding: 10px 15px;
        transition: transform 0.15s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }
  }

  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.28)
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  .btn::after {
    content: "";
    position: absolute;
    top: -60%;
    left: -30%;
    width: 160%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.35),
      transparent 60%
    );
    transform: rotate(25deg);
    opacity: 0.35;
    transition: transform 0.6s ease;
    pointer-events: none;
  }

  .btn:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.32);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.22);
  }

  .btn:hover::before {
    opacity: 1;
  }

  .btn:hover::after {
    transform: translateX(20%) rotate(25deg);
  }

  .btn:active {
    transform: translateY(0px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  }

  .btn:focus-visible {
    outline: 2px solid rgba(99, 94, 84, 0.9);
    outline-offset: 3px;
  }
`;

export const Input = styled.input`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  color: #444;
  font-family: monospace;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  &:focus-visible {
    outline: 2px solid #635e54;
  }

  &::placeholder {
    opacity: 0.55;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  color: #444;

  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  height: 200px;

  @media (max-width: 1080px) {
    height: 140px;
  }

  &::placeholder {
    opacity: 0.55;
  }

  &:focus-visible {
    outline: 2px solid #635e54;
  }
`;
