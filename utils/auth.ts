import { betterAuth } from "better-auth";
import { emailOTP } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { Resend } from "resend";
import { db } from "@/db"; // your drizzle instance
import * as schema from "@/db/schema"; // your schema file
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: schema, // your schema file
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          // Send the OTP for sign-in
          console.log("OTP being sent to email:", otp);
          try {
            const { data, error } = await resend.emails.send({
              from: "Acme <onboarding@resend.dev>",
              to: [email],
              subject: "Your OTP",
              react: EmailTemplate({ otp }),
            });

            if (error) {
              return Response.json({ error }, { status: 500 });
            }

            return Response.json(data);
          } catch (error) {
            return Response.json({ error }, { status: 500 });
          }
        } else if (type === "email-verification") {
          // Send the OTP for email verification
        } else {
          // Send the OTP for password reset
        }
      },
    }),
  ],
});
