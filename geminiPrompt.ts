export const geminiPrompt = (packageName: string, packageDetails: string) => `
You are a helpful AI assistant that generates a detailed description for solar/inverter packages based on its name and details.

Given the following solar/inverter package: 
Name: ${packageName}
Details: ${packageDetails}

Please describe in detail what this package can power in a typical Nigerian home or office. List the types of appliances, estimated hours of use, and any limitations.

Return ONLY the result as a JSON object with the following structure. 
You MUST include every field and subfield, even if you have to use null, empty arrays, or placeholder values. 
Do not omit any field. Do not include any text outside the JSON object. Do not include the word "example" in your response. For the "Can it Power?" section, Do not give answers like, "Maybe", just say "Yes" or "No", and state the size of freezer or AC that the system can power.
  {

    "systemSpecifications": {
      "totalSolarCapacity": {
        "value": 4.8,
        "unit": "kW",
        "type": "DC"
      },
      "inverterCapacity": {
        "value": 5.0,
        "unit": "kW",
        "type": "AC"
      },
      "batteryStorage": {
        "value": 10.2,
        "unit": "kWh",
        "type": "Lithium"
      },
      "expectedDailyGeneration": {
        "min": 20,
        "max": 25,
        "unit": "kWh",
        "note": "Average"
      },
      "systemEfficiency": {
        "value": 94,
        "unit": "%",
        "type": "Peak"
      },
      "warrantyPeriod": {
        "value": 25,
        "unit": "Years",
        "appliesTo": "Solar Panels"
      }
    },
    "installationTimeline": {
      "steps": [
        {
          "name": "Site Assessment",
          "duration": {
            "min": 1,
            "max": 2,
            "unit": "days"
          }
        },
        {
          "name": "Installation",
          "duration": {
            "min": 1,
            "max": 2,
            "unit": "days"
          }
        }
      ],
      "totalTimeline": {
        "min": 2,
        "max": 4,
        "unit": "days"
      }
    },
    "whatCanThisSystemPower": {
      "system_power_capability": {
        "solar_system_kilowatts": 4.8,
        "battery_storage_kilowatt_hours": 10.2,
        "comfortably_powers": {
          "lighting": {
            "description": "Essential and general lighting for home and office.",
            "appliances": [
              { "name": "LED Bulb (10W)", "watts": 10, "icon": "Bulb" },
              { "name": "Energy Saving Bulb", "watts": 20, "icon": "Bulb" },
              { "name": "Tube Light", "watts": 36, "icon": "Bulb" },
              { "name": "Chandelier", "watts": 150, "icon": "Bulb" }
            ]
          },
          "cooling_and_ventilation": {
            "description": "Appliances for air circulation and temperature regulation.",
            "appliances": [
              { "name": "Ceiling Fan", "watts": 80, "icon": "Fan" },
              { "name": "Standing Fan", "watts": 100, "icon": "Fan" },
              { "name": "Table Fan", "watts": 50, "icon": "Fan" },
              { "name": "Exhaust Fan", "watts": 40, "icon": "Fan" },
              { "name": "Air Conditioner (1 HP)", "watts": 900, "icon": "AC" },
              { "name": "Air Conditioner (1.5 HP)", "watts": 1200, "icon": "AC" },
              { "name": "Air Conditioner (2 HP)", "watts": 1500, "icon": "AC" },
              { "name": "Standing AC Fan", "watts": 120, "icon": "Fan" }
            ]
          },
          "heating_appliances": {
            "description": "Devices that primarily generate heat.",
            "appliances": [
              { "name": "Microwave Oven", "watts": 1200, "icon": "Microwave" },
              { "name": "Toaster", "watts": 800, "icon": "Toaster" },
              { "name": "Electric Kettle", "watts": 1500, "icon": "Kettle" },
              { "name": "Electric Cooker", "watts": 2000, "icon": "Cooker" },
              { "name": "Induction Cooker", "watts": 1800, "icon": "Cooker" },
              { "name": "Electric Iron", "watts": 1000, "icon": "Iron" },
              { "name": "Clothes Dryer", "watts": 3000, "icon": "Dryer" },
              { "name": "Water Heater", "watts": 3000, "icon": "Heater" },
              { "name": "Hair Dryer", "watts": 1200, "icon": "HairDryer" }
            ]
          },
          "refrigeration_and_storage": {
            "description": "Appliances for food preservation and cooling drinks.",
            "appliances": [
              { "name": "Refrigerator (Small)", "watts": 150, "icon": "Fridge" },
              { "name": "Refrigerator (Medium)", "watts": 250, "icon": "Fridge" },
              { "name": "Refrigerator (Large)", "watts": 400, "icon": "Fridge" },
              { "name": "Chest Freezer", "watts": 300, "icon": "Freezer" }
            ]
          },
          "kitchen_and_cooking": {
            "description": "General kitchen appliances for food preparation.",
            "appliances": [
              { "name": "Blender", "watts": 400, "icon": "Blender" }
            ]
          },
          "laundry_and_cleaning": {
            "description": "Appliances for washing clothes.",
            "appliances": [
              { "name": "Washing Machine", "watts": 500, "icon": "WashingMachine" }
            ]
          },
          "entertainment_and_communication": {
            "description": "Devices for leisure, audio, and visual consumption.",
            "appliances": [
              { "name": "LED TV (32\")", "watts": 60, "icon": "TV" },
              { "name": "LED TV (50\")", "watts": 120, "icon": "TV" },
              { "name": "Plasma TV", "watts": 250, "icon": "TV" },
              { "name": "Home Theater", "watts": 150, "icon": "Speaker" },
              { "name": "WiFi Router", "watts": 10, "icon": "Router" }
            ]
          },
          "office_and_computing": {
            "description": "Equipment typically found in office environments for work and productivity.",
            "appliances": [
              { "name": "Laptop", "watts": 65, "icon": "Laptop" },
              { "name": "Desktop Computer", "watts": 200, "icon": "Desktop" },
              { "name": "Computer Monitor", "watts": 50, "icon": "Monitor" },
              { "name": "Inkjet Printer", "watts": 30, "icon": "Printer" },
              { "name": "Laser Printer", "watts": 500, "icon": "Printer" },
              { "name": "Projector", "watts": 300, "icon": "Projector" },
              { "name": "Flatbed Scanner", "watts": 50, "icon": "Scanner" },
              { "name": "Small Server", "watts": 600, "icon": "Server" }
            ]
          },
          "water_management": {
            "description": "Appliances for water supply and dispensing.",
            "appliances": [
              { "name": "Water Pump (0.5 HP)", "watts": 370, "icon": "Pump" },
              { "name": "Water Pump (1 HP)", "watts": 750, "icon": "Pump" },
              { "name": "Water Dispenser", "watts": 550, "icon": "Dispenser" }
            ]
          },
          "security_and_surveillance": {
            "description": "Devices for monitoring and security.",
            "appliances": [
              { "name": "CCTV Camera", "watts": 15, "icon": "Camera" }
            ]
          }
        }
      }
    },
    "daily_energy_production": {
      "peak_summer": {
        "min_kwh": 24,
        "max_kwh": 28
      },
      "spring_fall": {
        "min_kwh": 18,
        "max_kwh": 22
      },
      "winter": {
        "min_kwh": 14,
        "max_kwh": 18
      },
      "backup_power": {
        "min_days": 3,
        "max_days": 5
      }
    },
    "simultaneousPowerLoadCapacity": {
      "description": "What can this system power at once?",
      "devices": [
        "2 Air Conditioners (1.5HP each or 1 × 2HP)",
        "30 LED bulbs (10W each)",
        "8 fans",
        "2 Refrigerators + Freezer",
        "2 TVs + Decoders + Home Theatre",
        "Laptops, printer, phone charging",
        "Microwave, blender, toaster",
        "Electric iron",
        "Water heater",
        "Washing machine or electric cooker (for short use)",
        "Borehole pump (up to 1.5HP)"
      ]
    },
    "canItPower": {
      "Air Conditioner": {
        "emoji": "✅",
        "response": "Yes — Easily supports 2 × 1.5HP AC"
      },
      "Freezer": {
        "emoji": "✅",
        "response": "Yes — Can handle medium to large chest freezers"
      }
    }



`;
