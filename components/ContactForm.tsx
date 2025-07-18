"use client";

import React, { useState } from "react";
import { motion } from "@/lib/framerMotion";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormLabel, FormField } from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const formSchema = z.object({
    name: z.string().min(2, "Please enter a minimum of 2 characters"),
    phoneNumber: z.string().min(11, "Phone number is required"),
    email: z.string().email("Invalid email address").min(4, "Email required"),
    subject: z.string().min(2, "Subject is required"),
    message: z.string().min(2, "Message required"),
  });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (data: FormData) => {
    setErrorMsg("");
    setSuccess(false);
    try {
      const res = await fetch("/api/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        
        form.reset();
      } else {
        setErrorMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
    }
  };

  const staggerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          <motion.div className="space-y-2" variants={itemAnimation}>
            <FormLabel htmlFor="name" className="block text-sm font-medium">
              Name
            </FormLabel>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Your name here"
                />
              )}
            />
          </motion.div>
          <motion.div className="space-y-2" variants={itemAnimation}>
            <FormLabel htmlFor="email" className="block text-sm font-medium">
              Email
            </FormLabel>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="e.g. johndoe@gmail.com"
                />
              )}
            />
          </motion.div>
          <motion.div
            className="space-y-2"
            variants={itemAnimation}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <FormLabel
              htmlFor="phoneNumber"
              className="block text-sm font-medium">
              Phone Number
            </FormLabel>
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="phoneNumber"
                  type="tel"
                  placeholder="Your phone number here"
                />
              )}
            />
          </motion.div>
          <motion.div
            className="space-y-2"
            variants={itemAnimation}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <FormLabel htmlFor="subject" className="block text-sm font-medium">
              Subject
            </FormLabel>
            <FormField
              name="subject"
              control={form.control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              )}
            />
          </motion.div>
          <motion.div
            className="space-y-2"
            variants={itemAnimation}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <FormLabel htmlFor="message" className="block text-sm font-medium">
              Message
            </FormLabel>
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  id="message"
                  placeholder="Type your message here"
                />
              )}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.87 }}
            className="space-y-2"
            variants={itemAnimation}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <Button className="w-full gradient-bg" type="submit">
              Send Message
            </Button>
            {success && (
              <div className="text-green-600 text-sm mt-2">
                Message sent successfully!
              </div>
            )}
            {errorMsg && (
              <div className="text-red-600 text-sm mt-2">{errorMsg}</div>
            )}
          </motion.div>
        </motion.div>
      </form>
    </Form>
  );
};

export default ContactForm;
