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

    button {
        margin-top: 20px;
        padding: 8px 14px;
        border: none;
        background: #444;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    }

    button:hover {
        background: #555;
    }

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

    .btn {
        width: 130px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(15, 15, 15);
        border: none;
        color: white;
        font-weight: 600;
        gap: 8px;
        cursor: pointer;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
        position: relative;
        overflow: hidden;
        transition-duration: .3s;
        margin: auto;
    }

    .btn::before {
        width: 130px;
        height: 130px;
        position: absolute;
        content: "";
        background-color: white;
        border-radius: 50%;
        left: -100%;
        top: 0;
        transition-duration: .3s;
        mix-blend-mode: difference;
    }

    .btn:hover::before {
        transition-duration: .3s;
        transform: translate(100%, -50%);
        border-radius: 0;
    }

    .btn:active {
        transform: translate(5px, 5px);
        transition-duration: .3s;
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
`;

