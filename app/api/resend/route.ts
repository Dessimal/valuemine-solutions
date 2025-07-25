import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, phoneNumber, email, subject, message } = data;

    const { error } = await resend.emails.send({
      from: "Valuemine <info@valueminesolutions.com.ng>",
      to: "odesanmimichael@gmail.com",
      subject: subject,
      react: EmailTemplate({ name, email, phoneNumber, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
