import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail, { ContactEmailProps } from "@/emails/ContactEmail";
const resend = new Resend(process.env["RESEND_API_KEY"]);

export async function POST(request: NextRequest) {
  const values = (await request.json()) as ContactEmailProps;

  await resend.emails.send({
    //@ts-expect-error
    from: process.env["RESEND_EMAIL_FROM"],
    //@ts-expect-error
    to: process.env["RESEND_EMAIL_TO"],
    subject: "New Contact Form Submission!",
    react: ContactEmail(values),
  });

  return NextResponse.json({
    status: "OK",
  });
}
