"use client";

import { useState } from "react";

interface ErrorInterface {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorInterface>({});
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validate = () => {
    let newErrors: ErrorInterface = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    console.log(formData);
    setSuccess("success");
    setErrors({});
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setSuccess(""), 2000);
  };
  return (
    <div className="flex justify-center items-center py-12 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md  shadow-lg rounde-lg p-6 space-y-4 rounded-lg"
      >
        <h1 className="text-4xl font-bold text-center text-primary">
          Contact Us
        </h1>
        <div className="flex flex-col ">
          <label className="text-md text-primary mb-2">
            Name <span className="text-error">*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-primary p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary mb-4"
          />
          {errors.name && <p className="text-sm text-error">{errors.name}</p>}
          <label className="text-md text-primary ">
            Email<span className="text-error">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full  border border-primary p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary mb-4 "
          />
          {errors.email && <p className="text-sm text-error">{errors.email}</p>}
          <label className="text-md text-primary ">
            Message<span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            required
            className="w-full border border-primary p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary mb-4"
          />
          {errors.message && (
            <p className="text-sm text-error">{errors.message}</p>
          )}
          {success && (
            <p className="text-sm text-primary">Message sent successfully</p>
          )}
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-primary/90 transition-colors duration-300 ease-in-out">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
