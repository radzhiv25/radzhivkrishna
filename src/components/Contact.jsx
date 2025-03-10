import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://radzhiv.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        message.success("Message sent successfully!");
        reset(); // Reset form
      } else {
        message.error("Failed to send message.");
      }
    } catch (error) {
      message.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:w-4/5 mx-auto flex md:flex-row flex-col md:gap-10 gap-5 items-center my-10 border border-dashed rounded-md p-2">
      <div className="aspect-square md:size-3/5 size-full bg-gradient-to-br from-fuchsia-300 via-pink-400 to-purple-500 animate-gradient bg-300% rounded-md shadow-md"></div>
      <div className="size-full flex flex-col items-center mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:px-2 rounded-md w-full">
          <div className="flex flex-col items-start">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border outline-none rounded"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border outline-none rounded"
              placeholder="yourname@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="message" className="font-semibold">Message</label>
            <textarea
              {...register("message")}
              className="w-full border rounded-md p-2 resize-none"
              placeholder="Type in your message"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <button type="submit" className="bg-black text-white p-2 w-full rounded-md" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;