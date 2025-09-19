import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";
// import ContactSec from "../../public/assets/Contact.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { supabase } from "../lib/supabase";
// import Earth from "../ui/Globe";

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
      // Store in Supabase
      const { data, error } = await supabase
        .from('contact_enquiries')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        message.error("Failed to save message to database.");
        return;
      }

      // Success - show message and reset form
      message.success("Message saved successfully! I'll get back to you soon.");
      console.log('Form data saved to Supabase:', data);
      reset(); // Reset form

    } catch (error) {
      console.error('Form submission error:', error);
      message.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex md:flex-row flex-col md:gap-10 gap-5 items-center my-10">
      {/* <div className="aspect-square size-full bg-gradient-to-br from-fuchsia-300 via-pink-400 to-purple-500 animate-gradient bg-300% rounded-md shadow-md"></div> */}
      {/* <Earth /> */}
      {/*<img src={ContactSec} alt="Contact Section" className="md:w-1/2 rounded-md shadow-md" />*/}
      <div className="md:w-1/3 size-full flex flex-col items-start mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Send me a message and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 items-start">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="yourname@example.com"
                />
                {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Type in your message"
                  rows={4}
                />
                {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
              </div>
              <Button type="submit" variant="outline" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;