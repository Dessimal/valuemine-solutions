//DATA FOR ALL PACKAGES
export const packageBreakdown = [
  {
    packageName: "1000W",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 400,
          unit: "W",
          type: "DC",
        },
        inverterCapacity: {
          value: 1000,
          unit: "W",
          type: "AC",
        },
        batteryStorage: {
          value: 1.2,
          unit: "kWh",
          type: "Lead-Acid/Gel",
        },
        expectedDailyGeneration: {
          min: 1.6,
          max: 2.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 60,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 10,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 0.5,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1,
          max: 1.5,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.4,
          battery_storage_kilowatt_hours: 1.2,
          comfortably_powers: {
            lighting: {
              description:
                "Very basic lighting for a few rooms or a small space.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Can run a single, energy-efficient fan for limited hours.",
              appliances: [
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for any heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description: "Not suitable for refrigerators or freezers.",
              appliances: [],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Basic entertainment and communication needs.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description:
                "Charging of mobile devices and very light laptop use.",
              appliances: [
                {
                  name: "Laptop Charger",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Phone Charger",
                  watts: 5,
                  icon: "Phone",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Very limited security devices for short periods.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 1.6,
          max_kwh: 2.0,
        },
        spring_fall: {
          min_kwh: 1.2,
          max_kwh: 1.6,
        },
        winter: {
          min_kwh: 0.96,
          max_kwh: 1.2,
        },
        backup_power: {
          min_days: 0.1,
          max_days: 0.2,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 1000W inverter system with a 400W solar array and a 100Ah battery is a very entry-level solution designed for minimal, essential power needs. It's best suited for basic lighting and charging devices during brief power outages.",
        devices: [
          "No Air Conditioner",
          "2-3 LED bulbs (10W each)",
          "1 small fan (for very limited hours)",
          "No Refrigerator or Freezer",
          "1 small TV + Decoder (for limited hours)",
          "Phone and laptop charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system cannot power any size of air conditioner.",
        },
        Freezer: {
          emoji: "❌",
          response: "No — This system is not suitable for powering freezers.",
        },
      },
    },
  },

  {
    packageName: "1kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 0.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 1.0,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 2.64,
          unit: "kWh",
          type: "Lead-Acid",
        },
        expectedDailyGeneration: {
          min: 3.2,
          max: 4.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 65,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1.5,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.8,
          battery_storage_kilowatt_hours: 2.64,
          comfortably_powers: {
            lighting: {
              description: "Very basic essential lighting for a few rooms.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Single fan usage for limited hours.",
              appliances: [
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for any heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description:
                "Not generally recommended for refrigerators or freezers due to limited capacity and backup.",
              appliances: [],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Limited entertainment and charging.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic personal computing and phone charging.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Very limited security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 3.2,
          max_kwh: 4.0,
        },
        spring_fall: {
          min_kwh: 2.4,
          max_kwh: 3.2,
        },
        winter: {
          min_kwh: 1.92,
          max_kwh: 2.4,
        },
        backup_power: {
          min_days: 0.2,
          max_days: 0.4,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 1KVA inverter system with an 800W solar array and a single 220Ah tubular battery is designed for minimal and strictly essential power needs in a very small Nigerian living space or small office. It's primarily for charging devices and providing light during short power outages.",
        devices: [
          "No Air Conditioner",
          "3-4 LED bulbs (10W each)",
          "1 fan (not heavy-duty, for limited hours)",
          "No Refrigerator or Freezer",
          "1 small TV + Decoder",
          "Laptops, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "❌",
          response: "No — This system is not suitable for powering freezers.",
        },
      },
    },
  },
  {
    packageName: "1.5kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 0.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 1.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 2.64,
          unit: "kWh",
          type: "Lead-Acid(Tubular)",
        },
        expectedDailyGeneration: {
          min: 3.2,
          max: 4.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 70,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1.5,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.8,
          battery_storage_kilowatt_hours: 2.64,
          comfortably_powers: {
            lighting: {
              description:
                "Essential lighting for a very small home or a few rooms.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Limited fan usage.",
              appliances: [
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description:
                "Can power a very small, energy-efficient refrigerator for limited hours.",
              appliances: [
                {
                  name: "Refrigerator (Small, energy-efficient)",
                  watts: 100,
                  icon: "Fridge",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Basic entertainment and communication.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic computing and charging needs.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Limited security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 3.2,
          max_kwh: 4.0,
        },
        spring_fall: {
          min_kwh: 2.4,
          max_kwh: 3.2,
        },
        winter: {
          min_kwh: 1.92,
          max_kwh: 2.4,
        },
        backup_power: {
          min_days: 0.25,
          max_days: 0.5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 1.5KVA inverter system with an 800W solar array and a single 220Ah tubular battery is designed for minimal and essential power needs in a very small Nigerian home or apartment. It's best suited for powering critical appliances during short grid outages.",
        devices: [
          "No Air Conditioner",
          "3-5 LED bulbs (10W each)",
          "1-2 fans (not heavy-duty)",
          "1 Small Refrigerator (for limited, intermittent use)",
          "1 TV + Decoder",
          "Laptops, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "❌",
          response:
            "No — This system is not suitable for powering freezers due to their continuous and high power draw.",
        },
      },
    },
  },
  {
    packageName: "2kVA hybrid",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 0.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 2.0,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 2.64,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 3.2,
          max: 4.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 75,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 0.5,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 1.5,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 0.8,
          battery_storage_kilowatt_hours: 2.64,
          comfortably_powers: {
            lighting: {
              description:
                "Basic lighting for a small apartment or a few rooms.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Very limited appliances for air circulation.",
              appliances: [
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Not suitable for heating appliances.",
              appliances: [],
            },
            refrigeration_and_storage: {
              description:
                "Can power a small, energy-efficient refrigerator for limited hours.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Not suitable for kitchen appliances.",
              appliances: [],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Devices for basic entertainment and charging.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic computing and charging needs.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description: "Not suitable for water pumps or dispensers.",
              appliances: [],
            },
            security_and_surveillance: {
              description: "Limited security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 3.2,
          max_kwh: 4.0,
        },
        spring_fall: {
          min_kwh: 2.4,
          max_kwh: 3.2,
        },
        winter: {
          min_kwh: 1.92,
          max_kwh: 2.4,
        },
        backup_power: {
          min_days: 0.25,
          max_days: 0.5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 2KVA hybrid inverter system with an 800W solar array and a single 220Ah tubular battery is designed for very basic and essential power needs in a small Nigerian home or apartment. It's ideal for households looking to power critical appliances during short grid outages or to supplement power for specific devices.",
        devices: [
          "No Air Conditioner",
          "5-7 LED bulbs (10W each)",
          "2 fans (not heavy-duty)",
          "1 Small Refrigerator (run intermittently or for short periods)",
          "1 TV + Decoder",
          "Laptops, phone charging",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "❌",
          response:
            "No — This system is not ideal for powering freezers due to their continuous power draw, unless it's a very small, energy-efficient model and other loads are minimized.",
        },
      },
    },
  },
  {
    packageName: "2.5kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 1.2,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 2.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 5.28,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 4.8,
          max: 6.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 80,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 2,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 1.2,
          battery_storage_kilowatt_hours: 5.28,
          comfortably_powers: {
            lighting: {
              description: "Basic lighting for a small home or apartment.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description: "Limited appliances for air circulation.",
              appliances: [
                {
                  name: "Ceiling Fan",
                  watts: 80,
                  icon: "Fan",
                },
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description:
                "Very limited use of heating devices due to high power consumption.",
              appliances: [
                {
                  name: "Toaster",
                  watts: 800,
                  icon: "Toaster",
                },
                {
                  name: "Electric Iron",
                  watts: 1000,
                  icon: "Iron",
                },
              ],
            },
            refrigeration_and_storage: {
              description: "Appliances for basic food preservation.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "Very limited use of kitchen appliances.",
              appliances: [
                {
                  name: "Blender",
                  watts: 400,
                  icon: "Blender",
                },
              ],
            },
            laundry_and_cleaning: {
              description: "Not suitable for laundry appliances.",
              appliances: [],
            },
            entertainment_and_communication: {
              description: "Devices for basic entertainment and communication.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description: "Basic office and computing equipment.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description:
                "Not suitable for water pumps. Can handle water dispensers for limited use.",
              appliances: [
                {
                  name: "Water Dispenser",
                  watts: 550,
                  icon: "Dispenser",
                },
              ],
            },
            security_and_surveillance: {
              description: "Basic security devices.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 4.8,
          max_kwh: 6.0,
        },
        spring_fall: {
          min_kwh: 3.6,
          max_kwh: 4.8,
        },
        winter: {
          min_kwh: 2.88,
          max_kwh: 3.6,
        },
        backup_power: {
          min_days: 0.5,
          max_days: 1,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 2.5KVA inverter with a 1200W solar array and 2 x 220Ah tubular batteries is designed for basic power needs in a small Nigerian home or office. It can provide essential lighting, fan operation, and power for entertainment and charging devices during grid outages. The 1200W solar panels will help to replenish the batteries during the day, extending the backup time and reducing reliance on the grid.",
        devices: [
          "No Air Conditioner",
          "5-8 LED bulbs (10W each)",
          "2-3 fans",
          "1 Small Refrigerator OR 1 small chest freezer (not simultaneously with other heavy loads)",
          "1 TV + Decoder",
          "Laptops, phone charging",
          "Blender (for very short periods)",
          "Electric iron (for very limited and intermittent periods)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — This system is not designed to power air conditioners.",
        },
        Freezer: {
          emoji: "✅",
          response:
            "Yes — Can handle 1 small chest freezer, but not simultaneously with other high-power appliances.",
        },
      },
    },
  },
  {
    packageName: "3.5kVA",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 1.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 3.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 5.28,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 7.2,
          max: 9.0,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 85,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 3,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 1.8,
          battery_storage_kilowatt_hours: 5.28,
          comfortably_powers: {
            lighting: {
              description:
                "Essential lighting for small to medium-sized homes or offices.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
                {
                  name: "Energy Saving Bulb",
                  watts: 20,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                {
                  name: "Ceiling Fan",
                  watts: 80,
                  icon: "Fan",
                },
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                {
                  name: "Microwave Oven",
                  watts: 1200,
                  icon: "Microwave",
                },
                {
                  name: "Toaster",
                  watts: 800,
                  icon: "Toaster",
                },
                {
                  name: "Electric Iron",
                  watts: 1000,
                  icon: "Iron",
                },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
                {
                  name: "Refrigerator (Medium)",
                  watts: 250,
                  icon: "Fridge",
                },
                {
                  name: "Chest Freezer",
                  watts: 300,
                  icon: "Freezer",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [
                {
                  name: "Blender",
                  watts: 400,
                  icon: "Blender",
                },
              ],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                {
                  name: "Washing Machine",
                  watts: 500,
                  icon: "WashingMachine",
                },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: 'LED TV (50")',
                  watts: 120,
                  icon: "TV",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Desktop Computer",
                  watts: 200,
                  icon: "Desktop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                {
                  name: "Water Dispenser",
                  watts: 550,
                  icon: "Dispenser",
                },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 7.2,
          max_kwh: 9.0,
        },
        spring_fall: {
          min_kwh: 5.4,
          max_kwh: 7.2,
        },
        winter: {
          min_kwh: 4.32,
          max_kwh: 5.4,
        },
        backup_power: {
          min_days: 0.5,
          max_days: 1,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 3.5KVA inverter with an 1800W solar array and 2 x 220Ah tubular batteries is suitable for essential loads in a small to medium-sized home or office. It can provide reliable power for basic appliances, especially during evening hours and grid outages. The 1800W solar array contributes significantly to daily charging and direct power during sunlight hours, reducing reliance on the grid and maximizing battery life.",
        devices: [
          "No Air Conditioner",
          "10-15 LED bulbs (10W each)",
          "3-4 fans",
          "1 Refrigerator (medium) OR 1 Chest Freezer",
          "1 TV + Decoder",
          "Laptops, phone charging",
          "Microwave (short bursts, not with other heavy loads)",
          "Blender (short bursts)",
          "Electric iron (for very limited periods)",
          "Washing machine (for very limited periods, and not with other heavy loads)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "❌",
          response:
            "No — Not recommended for continuous use of AC units. Might handle a very small, energy-efficient inverter AC (0.75HP) for very short periods, but it's not designed for regular AC use.",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle 1 medium to large chest freezer.",
        },
      },
    },
  },
  {
    packageName: "4.2kVA hybrid",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 2.4,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 4.2,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 5.28,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 9.6,
          max: 12,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 85,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 1,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 3,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 2.4,
          battery_storage_kilowatt_hours: 5.28,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                {
                  name: "LED Bulb (10W)",
                  watts: 10,
                  icon: "Bulb",
                },
                {
                  name: "Energy Saving Bulb",
                  watts: 20,
                  icon: "Bulb",
                },
                {
                  name: "Tube Light",
                  watts: 36,
                  icon: "Bulb",
                },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                {
                  name: "Ceiling Fan",
                  watts: 80,
                  icon: "Fan",
                },
                {
                  name: "Standing Fan",
                  watts: 100,
                  icon: "Fan",
                },
                {
                  name: "Table Fan",
                  watts: 50,
                  icon: "Fan",
                },
                {
                  name: "Exhaust Fan",
                  watts: 40,
                  icon: "Fan",
                },
                {
                  name: "Air Conditioner (1 HP)",
                  watts: 900,
                  icon: "AC",
                },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                {
                  name: "Microwave Oven",
                  watts: 1200,
                  icon: "Microwave",
                },
                {
                  name: "Toaster",
                  watts: 800,
                  icon: "Toaster",
                },
                {
                  name: "Electric Kettle",
                  watts: 1500,
                  icon: "Kettle",
                },
                {
                  name: "Electric Iron",
                  watts: 1000,
                  icon: "Iron",
                },
                {
                  name: "Hair Dryer",
                  watts: 1200,
                  icon: "HairDryer",
                },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                {
                  name: "Refrigerator (Small)",
                  watts: 150,
                  icon: "Fridge",
                },
                {
                  name: "Refrigerator (Medium)",
                  watts: 250,
                  icon: "Fridge",
                },
                {
                  name: "Chest Freezer",
                  watts: 300,
                  icon: "Freezer",
                },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [
                {
                  name: "Blender",
                  watts: 400,
                  icon: "Blender",
                },
              ],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                {
                  name: "Washing Machine",
                  watts: 500,
                  icon: "WashingMachine",
                },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                {
                  name: 'LED TV (32")',
                  watts: 60,
                  icon: "TV",
                },
                {
                  name: 'LED TV (50")',
                  watts: 120,
                  icon: "TV",
                },
                {
                  name: "Home Theater",
                  watts: 150,
                  icon: "Speaker",
                },
                {
                  name: "WiFi Router",
                  watts: 10,
                  icon: "Router",
                },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                {
                  name: "Laptop",
                  watts: 65,
                  icon: "Laptop",
                },
                {
                  name: "Desktop Computer",
                  watts: 200,
                  icon: "Desktop",
                },
                {
                  name: "Computer Monitor",
                  watts: 50,
                  icon: "Monitor",
                },
                {
                  name: "Inkjet Printer",
                  watts: 30,
                  icon: "Printer",
                },
                {
                  name: "Laser Printer",
                  watts: 500,
                  icon: "Printer",
                },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                {
                  name: "Water Pump (0.5 HP)",
                  watts: 370,
                  icon: "Pump",
                },
                {
                  name: "Water Dispenser",
                  watts: 550,
                  icon: "Dispenser",
                },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [
                {
                  name: "CCTV Camera",
                  watts: 15,
                  icon: "Camera",
                },
              ],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 9.6,
          max_kwh: 12,
        },
        spring_fall: {
          min_kwh: 7.2,
          max_kwh: 9.6,
        },
        winter: {
          min_kwh: 5.76,
          max_kwh: 7.2,
        },
        backup_power: {
          min_days: 0.5,
          max_days: 1,
        },
      },
      simultaneousPowerLoadCapacity: {
        description:
          "This 4.2KVA hybrid system with a 2400W solar array and 2 x 220Ah tubular batteries can comfortably power a range of essential appliances in a typical Nigerian home or small office. The 4.2KVA inverter provides a good power output, while the 2400W solar panels ensure decent daily energy generation to recharge the batteries and directly power loads during the day. The tubular batteries offer a reliable storage capacity, providing backup during grid outages or at night.",
        devices: [
          "1 Air Conditioner (1 HP)",
          "15-20 LED bulbs (10W each)",
          "4-5 fans",
          "1 Refrigerator (medium) OR 1 Chest Freezer",
          "1 TV + Decoder + Home Theatre",
          "Laptops, phone charging",
          "Microwave (short bursts)",
          "Blender",
          "Electric iron (for limited periods)",
          "Washing machine (for limited periods)",
          "Water pump (0.5 HP, for short use)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response:
            "Yes — Can comfortably power 1 x 1HP AC. May run a 1.5HP AC for limited periods, but not simultaneously with other heavy loads.",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle 1 medium to large chest freezer.",
        },
      },
    },
  },
  {
    packageName: "5kVA hybrid",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 4.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 5.0,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 10.2,
          unit: "kWh",
          type: "Tubular",
        },
        expectedDailyGeneration: {
          min: 20,
          max: 25,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 4.8,
          battery_storage_kilowatt_hours: 10.2,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 24,
          max_kwh: 28,
        },
        spring_fall: {
          min_kwh: 18,
          max_kwh: 22,
        },
        winter: {
          min_kwh: 14,
          max_kwh: 18,
        },
        backup_power: {
          min_days: 3,
          max_days: 5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
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
          "Borehole pump (up to 1.5HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 2 × 1.5HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
  {
    packageName: "5KVA hybrid(Lithium)",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 4.8,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 5.0,
          unit: "W or KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 10.2,
          unit: "kWh",
          type: "Lithium",
        },
        expectedDailyGeneration: {
          min: 20,
          max: 25,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 4.8,
          battery_storage_kilowatt_hours: 10.2,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 24,
          max_kwh: 28,
        },
        spring_fall: {
          min_kwh: 18,
          max_kwh: 22,
        },
        winter: {
          min_kwh: 14,
          max_kwh: 18,
        },
        backup_power: {
          min_days: 3,
          max_days: 5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
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
          "Borehole pump (up to 1.5HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 2 × 1.5HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
  {
    packageName: "7.5kVA hybrid(Lithium)",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 6,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 7.5,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 15,
          unit: "kWh",
          type: "Lithium",
        },
        expectedDailyGeneration: {
          min: 22,
          max: 28,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 6,
          battery_storage_kilowatt_hours: 15,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 26,
          max_kwh: 32,
        },
        spring_fall: {
          min_kwh: 20,
          max_kwh: 25,
        },
        winter: {
          min_kwh: 16,
          max_kwh: 20,
        },
        backup_power: {
          min_days: 2,
          max_days: 4,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
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
          "Borehole pump (up to 1.5HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 2 × 1.5HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
  {
    packageName: "10kVA hybrid(Lithium)",
    jsonResponse: {
      systemSpecifications: {
        totalSolarCapacity: {
          value: 12,
          unit: "kW",
          type: "DC",
        },
        inverterCapacity: {
          value: 10,
          unit: "KVA",
          type: "AC",
        },
        batteryStorage: {
          value: 30,
          unit: "kWh",
          type: "Lithium",
        },
        expectedDailyGeneration: {
          min: 40,
          max: 50,
          unit: "kWh",
          note: "Average",
        },
        systemEfficiency: {
          value: 94,
          unit: "%",
          type: "Peak",
        },
        warrantyPeriod: {
          value: 25,
          unit: "Years",
          appliesTo: "Solar Panels",
        },
      },
      installationTimeline: {
        steps: [
          {
            name: "Site Assessment",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
          {
            name: "Installation",
            duration: {
              min: 1,
              max: 2,
              unit: "days",
            },
          },
        ],
        totalTimeline: {
          min: 2,
          max: 4,
          unit: "days",
        },
      },
      whatCanThisSystemPower: {
        system_power_capability: {
          solar_system_kilowatts: 12,
          battery_storage_kilowatt_hours: 30,
          comfortably_powers: {
            lighting: {
              description:
                "Essential and general lighting for home and office.",
              appliances: [
                { name: "LED Bulb (10W)", watts: 10, icon: "Bulb" },
                { name: "Energy Saving Bulb", watts: 20, icon: "Bulb" },
                { name: "Tube Light", watts: 36, icon: "Bulb" },
                { name: "Chandelier", watts: 150, icon: "Bulb" },
              ],
            },
            cooling_and_ventilation: {
              description:
                "Appliances for air circulation and temperature regulation.",
              appliances: [
                { name: "Ceiling Fan", watts: 80, icon: "Fan" },
                { name: "Standing Fan", watts: 100, icon: "Fan" },
                { name: "Table Fan", watts: 50, icon: "Fan" },
                { name: "Exhaust Fan", watts: 40, icon: "Fan" },
                { name: "Air Conditioner (1 HP)", watts: 900, icon: "AC" },
                { name: "Air Conditioner (1.5 HP)", watts: 1200, icon: "AC" },
                { name: "Air Conditioner (2 HP)", watts: 1500, icon: "AC" },
                { name: "Standing AC Fan", watts: 120, icon: "Fan" },
              ],
            },
            heating_appliances: {
              description: "Devices that primarily generate heat.",
              appliances: [
                { name: "Microwave Oven", watts: 1200, icon: "Microwave" },
                { name: "Toaster", watts: 800, icon: "Toaster" },
                { name: "Electric Kettle", watts: 1500, icon: "Kettle" },
                { name: "Electric Cooker", watts: 2000, icon: "Cooker" },
                { name: "Induction Cooker", watts: 1800, icon: "Cooker" },
                { name: "Electric Iron", watts: 1000, icon: "Iron" },
                { name: "Clothes Dryer", watts: 3000, icon: "Dryer" },
                { name: "Water Heater", watts: 3000, icon: "Heater" },
                { name: "Hair Dryer", watts: 1200, icon: "HairDryer" },
              ],
            },
            refrigeration_and_storage: {
              description:
                "Appliances for food preservation and cooling drinks.",
              appliances: [
                { name: "Refrigerator (Small)", watts: 150, icon: "Fridge" },
                { name: "Refrigerator (Medium)", watts: 250, icon: "Fridge" },
                { name: "Refrigerator (Large)", watts: 400, icon: "Fridge" },
                { name: "Chest Freezer", watts: 300, icon: "Freezer" },
              ],
            },
            kitchen_and_cooking: {
              description: "General kitchen appliances for food preparation.",
              appliances: [{ name: "Blender", watts: 400, icon: "Blender" }],
            },
            laundry_and_cleaning: {
              description: "Appliances for washing clothes.",
              appliances: [
                { name: "Washing Machine", watts: 500, icon: "WashingMachine" },
              ],
            },
            entertainment_and_communication: {
              description:
                "Devices for leisure, audio, and visual consumption.",
              appliances: [
                { name: 'LED TV (32")', watts: 60, icon: "TV" },
                { name: 'LED TV (50")', watts: 120, icon: "TV" },
                { name: "Plasma TV", watts: 250, icon: "TV" },
                { name: "Home Theater", watts: 150, icon: "Speaker" },
                { name: "WiFi Router", watts: 10, icon: "Router" },
              ],
            },
            office_and_computing: {
              description:
                "Equipment typically found in office environments for work and productivity.",
              appliances: [
                { name: "Laptop", watts: 65, icon: "Laptop" },
                { name: "Desktop Computer", watts: 200, icon: "Desktop" },
                { name: "Computer Monitor", watts: 50, icon: "Monitor" },
                { name: "Inkjet Printer", watts: 30, icon: "Printer" },
                { name: "Laser Printer", watts: 500, icon: "Printer" },
                { name: "Projector", watts: 300, icon: "Projector" },
                { name: "Flatbed Scanner", watts: 50, icon: "Scanner" },
                { name: "Small Server", watts: 600, icon: "Server" },
              ],
            },
            water_management: {
              description: "Appliances for water supply and dispensing.",
              appliances: [
                { name: "Water Pump (0.5 HP)", watts: 370, icon: "Pump" },
                { name: "Water Pump (1 HP)", watts: 750, icon: "Pump" },
                { name: "Water Dispenser", watts: 550, icon: "Dispenser" },
              ],
            },
            security_and_surveillance: {
              description: "Devices for monitoring and security.",
              appliances: [{ name: "CCTV Camera", watts: 15, icon: "Camera" }],
            },
          },
        },
      },
      daily_energy_production: {
        peak_summer: {
          min_kwh: 45,
          max_kwh: 55,
        },
        spring_fall: {
          min_kwh: 35,
          max_kwh: 45,
        },
        winter: {
          min_kwh: 28,
          max_kwh: 35,
        },
        backup_power: {
          min_days: 3,
          max_days: 5,
        },
      },
      simultaneousPowerLoadCapacity: {
        description: "What can this system power at once?",
        devices: [
          "3 Air Conditioners (1.5HP each)",
          "40 LED bulbs (10W each)",
          "10 fans",
          "3 Refrigerators + Freezer",
          "3 TVs + Decoders + Home Theatre",
          "Laptops, printer, phone charging",
          "Microwave, blender, toaster",
          "Electric iron",
          "Water heater",
          "Washing machine or electric cooker (for short use)",
          "Borehole pump (up to 2HP)",
        ],
      },
      canItPower: {
        "Air Conditioner": {
          emoji: "✅",
          response: "Yes — Easily supports 3 × 1.5HP or 2 × 2HP AC",
        },
        Freezer: {
          emoji: "✅",
          response: "Yes — Can handle medium to large chest freezers",
        },
      },
    },
  },
];
