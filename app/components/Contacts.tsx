"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import "../styles/contacts.css";
import TextArea from "./TextArea";

interface FormValues {
  name: string;
  phonenum: string;
  email: string;
  description: string;
}

const Contacts: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    phonenum: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name);

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <main className="body_wrapper">
      <h1 className="route_text">головна / контакти</h1>
      <section className="section_underwrapper">
        <section className="context_body">
          <h1 className="title_context">Зв'язатися з нами</h1>
          <p className="context_text">
            Ви можете звернутися до нас з будь-яким запитом, стосовно нашого
            магазину, наприклад, співпраця, питання щодо товарів, тощо.
          </p>
          <Input
            label="Ваше імʼя*"
            type="text"
            name="name"
            placeholder="Ваше імʼя"
            value={formValues.name}
            onChange={handleChange}
          />
          <Input
            label="Ваше імʼя*"
            type="text"
            name="phonenum"
            placeholder="Ваше імʼя"
            value={formValues.phonenum}
            onChange={handleChange}
          />
          <Input
            label="Ваше імʼя*"
            type="text"
            name="email"
            placeholder="Ваше імʼя"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextArea
            label="Ваше повідомлення"
            placeholder="Опишіть тему вашого звернення"
            value={formValues.description}
            onChange={handleChange}
            name="description"
          />
        </section>
      </section>
    </main>
  );
};

export default Contacts;
