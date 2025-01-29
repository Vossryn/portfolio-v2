"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/lib/actions";
import { cardBorderImageStyle, useButtonBorderImage } from "@/lib/utils";
import { useState } from "react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  email: z.string().min(2).max(100),
  body: z.string().min(2).max(500),
});

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [borderImageStyle, setHover] = useButtonBorderImage(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      body: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!sent) {
      setSent(true);
      await sendEmail(values);
      form.reset();
    }
  }

  return (
    <div
      style={{ ...cardBorderImageStyle }}
      className="flex-none w-full md:max-w-[400px] h-fit px-4 pt-8 pb-10"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-orbitron text-yellow-300">
                  Your Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-yellow-300 hover:border-cyan-300"
                    placeholder="v@edgerunner.com"
                    disabled={sent}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-orbitron text-yellow-300">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-yellow-300 hover:border-cyan-300"
                    placeholder="Here are the deets choom..."
                    disabled={sent}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            disabled={sent}
            className="relative px-4 py-2 text-yellow-300 hover:text-cyan-300 bg-transparent hover:bg-transparent min-w-28 font-orbitron"
            style={borderImageStyle}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
