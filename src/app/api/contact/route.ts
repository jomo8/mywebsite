import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Server is missing RESEND_API_KEY." },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
      to: ["joey.montalto@hotmail.com"],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: `Email provider rejected send: ${error.message}` },
        { status: 502 },
      );
    }

    if (!data?.id) {
      return NextResponse.json(
        { error: "Email provider returned no message id." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch {
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 },
    );
  }
}
