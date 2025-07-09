import * as React from "react";

interface EmailTemplateProps {
  otp?: string | number;
  name?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
}

export function EmailTemplate({
  otp,
  name,
  email,
  phoneNumber,
  message,
}: EmailTemplateProps) {
  console.log("OTP being sent to email:", otp);
  return (
    <div>
      {otp ? (
        <h2>
          Your one time password is,{" "}
          <span className="font-bold tracking-wide">{otp}</span>
        </h2>
      ) : (
        <>
          <div>
            <h3>Name: {name}</h3>
            <p>Phone Number: {phoneNumber}</p>
            <p>email: {email}</p>
          </div>
          <div>{message}</div>
        </>
      )}
    </div>
  );
}
