// import { NextRequest, NextResponse } from "next/server";
// import { generateText } from "ai";
// import { google } from "@ai-sdk/google";
// import { geminiPrompt } from "@/geminiPrompt";
// import crypto from "crypto";
// import { db } from "@/db";
// import { eq, and } from "drizzle-orm";
// import { gemini_descriptions } from "@/db/schema";
// import { verifyUser } from "@/app/data/user/verify-user";

// function hash(str: string) {
//   return crypto.createHash("sha256").update(str).digest("hex");
// }

// export async function POST(req: NextRequest) {
//   await verifyUser();
//   const { packageName, packageDetails } = await req.json();
//   if (!packageName || !packageDetails) {
//     return NextResponse.json(
//       { error: "Package name and details are required." },
//       { status: 400 }
//     );
//   }

//   const detailsHash = hash(packageDetails);

//   // Check for cached response in Supabase/Drizzle
//   const cached = await db
//     .select()
//     .from(gemini_descriptions)
//     .where(
//       and(
//         eq(gemini_descriptions.package_name, packageName),
//         eq(gemini_descriptions.details_hash, detailsHash)
//       )
//     )
//     .limit(1);

//   if (cached.length > 0) {
//     return NextResponse.json({ data: cached[0].gemini_response });
//   }

//   try {
//     const { text } = await generateText({
//       model: google("models/gemini-2.0-flash-exp", {
//         apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
//       }),
//       prompt: geminiPrompt(packageName, packageDetails),
//     });

//     let parsed;
//     try {
//       parsed = JSON.parse(text);
//       console.log("Parsed response:", parsed);
//     } catch {
//       // Try to extract JSON object from the response if Gemini adds extra text
//       const match = text.match(/\{[\s\S]*\}/);
//       if (match) {
//         parsed = JSON.parse(match[0]);
//       } else {
//         return NextResponse.json(
//           { error: "Gemini did not return valid JSON." },
//           { status: 500 }
//         );
//       }
//     }

//     // Store in Supabase/Drizzle
//     await db
//       .insert(gemini_descriptions)
//       .values({
//         package_name: packageName,
//         details_hash: detailsHash,
//         gemini_response: parsed,
//         created_at: new Date(),
//       })
//       .onConflictDoNothing();

//     return NextResponse.json({ data: parsed });
//   } catch (error) {
//     console.error("Gemini API error:", error);
//     return NextResponse.json(
//       { error: "Sorry, there was an error generating the description." },
//       { status: 500 }
//     );
//   }
// }

//app/gemini/route.ts
import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { geminiPrompt } from "@/geminiPrompt";
import crypto from "crypto";
import { db } from "@/db";
import { eq, and } from "drizzle-orm";
import { gemini_descriptions } from "@/db/schema";
import { verifyUser } from "@/app/data/user/verify-user";
import { packageBreakdown } from "@/app/constants"; // Import your local constants

function hash(str: string) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

export async function POST(req: NextRequest) {
  await verifyUser();
  const { packageName, packageDetails } = await req.json();
  if (!packageName || !packageDetails) {
    return NextResponse.json(
      { error: "Package name and details are required." },
      { status: 400 }
    );
  }

  // 1. Check local constants first
  const localData = packageBreakdown.find(
    (pkg) => pkg.packageName === packageName
  );
  if (localData) {
    return NextResponse.json({ data: localData.jsonResponse });
  }

  const detailsHash = hash(packageDetails);

  // 2. Check for cached response in Supabase/Drizzle (database)
  const cached = await db
    .select()
    .from(gemini_descriptions)
    .where(
      and(
        eq(gemini_descriptions.package_name, packageName),
        eq(gemini_descriptions.details_hash, detailsHash)
      )
    )
    .limit(1);

  if (cached.length > 0) {
    return NextResponse.json({ data: cached[0].gemini_response });
  }

  // 3. If no data found locally or in DB, send request to Gemini
  try {
    const { text } = await generateText({
      model: google("models/gemini-2.0-flash-exp", {
        apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      }),
      prompt: geminiPrompt(packageName, packageDetails),
    });

    let parsed;
    try {
      parsed = JSON.parse(text);
      console.log("Parsed response from Gemini:", parsed);
    } catch (parseError) {
      console.error(
        "Failed to parse direct JSON, attempting extraction:",
        parseError
      );
      // Try to extract JSON object from the response if Gemini adds extra text
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        parsed = JSON.parse(match[0]);
      } else {
        return NextResponse.json(
          { error: "Gemini did not return valid JSON." },
          { status: 500 }
        );
      }
    }

    // Store in Supabase/Drizzle
    await db
      .insert(gemini_descriptions)
      .values({
        package_name: packageName,
        details_hash: detailsHash,
        gemini_response: parsed,
        created_at: new Date(),
      })
      .onConflictDoNothing(); // This ensures you don't insert duplicates if somehow already exists

    return NextResponse.json({ data: parsed });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Sorry, there was an error generating the description." },
      { status: 500 }
    );
  }
}
