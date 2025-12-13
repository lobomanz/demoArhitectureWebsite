import React, { useState } from "react";
import {
  ModalBackdrop,
  LiquidGlass,
  GlassBend,
  GlassFace,
  GlassEdge,
  GlassContent,
  ModalLeft,
  ModalRight,
  Form,
  Input,
  Textarea,
} from "./styledModal";

export default function Modal({ isOpen, onClose, images = [] }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => onClose(), 300);
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <LiquidGlass onClick={(e) => e.stopPropagation()}>
        {/* SVG filter used by GlassBend (keep this inside the component) */}
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <filter id="glass-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.9 0"
            />
          </filter>
        </svg>

        <GlassBend />
        <GlassFace />
        <GlassEdge />

        <GlassContent>
          <button  className="btn close" onClick={onClose}>
                x
              </button>
          <ModalLeft>
            {images.map((src, index) => (
              <div className="image-container" key={index}>
                <img src={src} alt="contact" />
              </div>
            ))}
          </ModalLeft>

          <ModalRight>
            <h2 className="contact-title">Contact Us</h2>

            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Textarea
                className="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />

              <button type="submit" className="btn">
                Send
              </button>
            </Form>
          </ModalRight>
        </GlassContent>
      </LiquidGlass>
    </ModalBackdrop>
  );
}
