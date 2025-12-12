import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.2s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBox = styled.div`
  background: #f5f4f0;
  border-radius: 12px;
  width: 500px;
  color: #444;
  animation: scaleIn 0.25s ease forwards;
  display: flex;
  padding: 0;
  max-height: 500px;

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* ✅ Removed old global button styles here to avoid overriding the glass button */

  .modal-left {
    width: 30%;
    overflow: hidden;
    max-height: 100%;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    .image-container {
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
        position: relative;
      }
    }
  }

  .modal-right {
    width: 70%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .contact-title {
      margin-top: 0;
      text-align: center;
    }
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
  }

  /* glass highlight layer */
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

  /* liquid shine */
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
  border-radius: 6px;
  border: none;
  font-size: 16px;
  color: #444;
  font-family: monospace;

  &:focus-visible {
    outline: 2px solid #635e54;
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  height: 200px;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus-visible {
    outline: 2px solid #635e54;
  }
`;
