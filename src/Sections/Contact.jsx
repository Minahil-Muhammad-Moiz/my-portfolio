import React from "react";
import Section from "../Components/Section";
import { FiSend } from "react-icons/fi";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ccf5871e-d129-455a-b99c-96613961b7de");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Sent",
        text: "Message Sent Successfully.",
        icon: "success",
      });
    }
  };
  return (
    <Section id="#contact">
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label for="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea placeholder="Enter your message" name="message"></textarea>
        </div>
        <button type="submit">
          Send <FiSend />
        </button>
      </form>
    </Section>
  );
};

export default Contact;
