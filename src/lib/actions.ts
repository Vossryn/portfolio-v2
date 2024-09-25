"use server";

import { Resend } from "resend";

import { EmailTemplate } from "@/components/EmailTemplate";

export async function sendEmail({
  email,
  body,
}: {
  email: string;
  body: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "Vossryn Portfolio <vossrynportfolio@resend.dev>",
    to: ["vossryn@gmail.com"],
    subject: "Contact Request from Portfolio",
    react: EmailTemplate({ email, body }),
  });

  if (error) {
    console.error(error);
  }

  return data;
}
