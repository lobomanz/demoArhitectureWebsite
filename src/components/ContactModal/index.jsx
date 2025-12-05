import React, {useState} from "react";
import {ModalBackdrop, ModalBox, Form, Input, Textarea} from "./styledModal";

export default function Modal({isOpen, onClose, images = []}) {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    if (!isOpen) return null;


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    {images.map((src, index) => (
                        <div className="image-container" key={index}>
                            <img src={src} alt="contact-image"/>
                        </div>
                    ))}
                </div>
                <div className="modal-right">
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
                        <button type="submit" className="btn">Send</button>
                    </Form>
                </div>
            </ModalBox>
        </ModalBackdrop>
    );
}