import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const subject = formData.get("subject")?.toString();
  const message = formData.get("message")?.toString();
  const honeypot = formData.get("company")?.toString();
  const token = formData.get("g-recaptcha-response")?.toString();

  // 1. Bot trap
  if (honeypot) return NextResponse.json({ ok: false });

  // 2. Verify reCAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    }
  );

  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    return NextResponse.json({
      ok: false,
      error: "Failed CAPTCHA verification",
    });
  }

  // 3. Send email using Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL!,
      subject: subject || "New Message from Contact Form",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ ok: false, error: "Email failed" });
  }
}
