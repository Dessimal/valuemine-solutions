import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: NextRequest) {
  const { packageName, packageDetails } = await req.json();
  if (!packageName || !packageDetails) {
    return NextResponse.json(
      { error: "Package name and details are required." },
      { status: 400 }
    );
  }
  try {
    const { text } = await generateText({
      model: google("models/gemini-2.0-flash-exp", {
        apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      }),
      prompt: ` Given the following solar/inverter package:
    Name: ${packageName}
    Details: ${packageDetails}

    Please describe in detail what this package can power in a typical Nigerian home or office. List the types of appliances, estimated hours of use, and any limitations. here is an example below. Use the same format as the example below.
    Note: Present it in plain English.   Do not return code or HTML. Use checkboxes for lists. Use emojis to highlight key points. Make it easy to read and understand, and beautifully formatted.
    Example:  **6.2kVA Hybrid Inverter Package**

**What Can This System Power?** 

This system is ideal for running essential household and office appliances, including:

✅ Lighting points (bulbs, LED lights) ✅ Ceiling & standing fans ✅ Television & decoders ✅ Laptops & desktop computers & printer ✅ Small to large kitchen appliances (e.g., blender, toaster, microwave) ✅ Refrigerator/freezer (up to 500L) ✅ Washing machine (up to 8kg) ✅ Air conditioner (up to 1.5HP) ✅ Water heater (small to medium capacity) ✅ Electric stove (small use)

### **Daytime Power Output (When Solar is Active)**

2400W solar panel array generates about 10,800Wh (10.8kWh) per day assuming 4.5 peak sun hours. This power is used to run appliances directly while also charging the battery.

 _**Simultaneous Power Load**_

This system can run the following appliances at the same time:

- **Air Conditioner (1.5HP, 1200W)** for moderate use

- **20–25 LED bulbs (10W each)**

- **6–8 ceiling or standing fans (70W each)**

- **1 TV + Decoder (120W total)**

- **2 Laptops or Desktop Computers/Printer (150W - 250W each)**

- **2–3 Phone chargers, small gadgets (50W total)**

- **1 Medium refrigerator/freezer (up to 500L)**

- **1 Washing machine (up to 8kg, moderate use)**

- **Microwave (up to 1000W)** for short bursts

- **Blender/Toaster for short bursts (up to 700W)**

- **Water heater (small to medium capacity) for short use**

- **Electric stove (small use)**

### **Battery Backup for Nighttime Use (When Solar is Inactive)**

- **Battery Storage Capacity**: 4 x 220Ah = 17,600Wh (17.6kWh)

- **Usable Energy (50% DOD)**: 8,800Wh (8.8kWh)

*Example Nighttime Backup:*

- 8 hours backup running an air conditioner (1.5HP), fan, and LED bulbs

- 6 hours backup running a refrigerator, TV, and fan

- 4–5 hours backup running air conditioner, refrigerator, and washing machine

- 3–4 hours backup running air conditioner, microwave, and toaster

### **Recommended Usage:**

**Daytime (7AM - 7PM) - 3000W max load**

- Air conditioner (1.5HP)

- LED bulbs, fans, TV, laptops, printer, phone charging

- Medium refrigerator/freezer (up to 500L)

- Microwave, blender, toaster (short bursts)

- Washing machine (up to 8kg, moderate use)

- Water heater for short bursts

- Electric stove for short use

**Nighttime (7PM - 7AM) - 1500W max load**

- Air conditioner (1.5HP)

- LED bulbs, fan, TV

- Refrigerator (efficient use)

- Phone charging, laptop

### **Can It Power an AC?**

Yes, this system can power a **1.5HP air conditioner** along with other appliances.

### **Can It Power a Freezer?**

Yes, this system can efficiently power a **500L freezer**.

This breakdown emphasizes the system's capability to support higher-power appliances like an air conditioner, refrigerator, and more simultaneously, helping customers easily identify when the system can support essential, larger appliances. Let me know if you'd like to make any further adjustments!`,
    });

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Sorry, there was an error generating the description." },
      { status: 500 }
    );
  }
}
