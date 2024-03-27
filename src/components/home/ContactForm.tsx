"use client";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { Button, Input, Textarea } from "@nextui-org/react";

function ContactForm() {
  const [nameValue, setNameValue] = useState("");

  const [emailValue, setEmailValue] = useState("");

  const [messageValue, setMessageValue] = useState("");

  const fields = [
    {
      id: "name",
      label: "Name",
      name: "from_name",
      autoFocus: true,
      multiline: false,
    },
    {
      id: "email",
      label: "Email Address",
      name: "user_email",
      autoFocus: false,
      multiline: false,
    },
    {
      id: "message",
      label: "Message",
      name: "message",
      autoFocus: false,
      multiline: true,
    },
  ];

  function sendEmail(e: any) {
    e.preventDefault();

    const isNameValid = nameValue.trim() !== "";
    const isEmailValid = emailValue.trim() !== "";
    const isMessageValid = messageValue.trim() !== "";

    if (isNameValid && isEmailValid && isMessageValid) {
      emailjs
        .sendForm(
          String(process.env.NEXT_PUBLIC_EMAIL_SERVICE),
          String(process.env.NEXT_PUBLIC_EMAIL_TEMP),
          e.target,
          "bsET1a5yB0esjGNfS",
        )

        .then(
          (result) => {
            console.log(result.text);
            alert("Email sent!");
            // Reset the form state
            setNameValue("");
            setEmailValue("");
            setMessageValue("");
          },
          (error) => {
            console.log(error);
          },
        );
    }
  }

  return (
    <section className="  mx-auto flex  w-full flex-col items-center justify-center px-6">
      <form
        className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6 text-2xl text-black"
        onSubmit={sendEmail}
      >
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          aria-label="Name"
          name="from_name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          size="lg"
          isRequired
        />

        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          aria-label="Email"
          name="user_email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          size="lg"
          isRequired
        />

        <Textarea
          name="message"
          label="Message"
          placeholder="Enter your description"
          className="w-full text-xl"
          aria-label="Message"
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
          size="lg"
          isRequired
        />
        <Button
          className="col-span-full mx-auto flex w-full items-center justify-center rounded bg-purple text-center  font-bold text-white"
          type="submit"
          spinner
        >
          Send
        </Button>
      </form>
    </section>
  );
}

export default ContactForm;
