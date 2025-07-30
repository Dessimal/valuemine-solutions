import { CheckCircle, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function GeminiResultCard({ data }: { data: any }) {
  if (!data) return null;

  const specifications = data.systemSpecifications
    ? [
        {
          label: "Total Solar Capacity",
          value: data.systemSpecifications.totalSolarCapacity?.value ?? "N/A",
          unit:
            (data.systemSpecifications.totalSolarCapacity?.unit ?? "") +
            (data.systemSpecifications.totalSolarCapacity?.type
              ? ` (${data.systemSpecifications.totalSolarCapacity.type})`
              : ""),
        },
        {
          label: "Inverter Capacity",
          value: data.systemSpecifications.inverterCapacity?.value ?? "N/A",
          unit:
            (data.systemSpecifications.inverterCapacity?.unit ?? "") +
            (data.systemSpecifications.inverterCapacity?.type
              ? ` (${data.systemSpecifications.inverterCapacity.type})`
              : ""),
        },
        {
          label: "Battery Storage",
          value: data.systemSpecifications.batteryStorage?.value ?? "N/A",
          unit:
            (data.systemSpecifications.batteryStorage?.unit ?? "") +
            (data.systemSpecifications.batteryStorage?.type
              ? ` (${data.systemSpecifications.batteryStorage.type})`
              : ""),
        },
        {
          label: "Expected Daily Generation",
          value:
            (data.systemSpecifications.expectedDailyGeneration?.min ?? "N/A") +
            " - " +
            (data.systemSpecifications.expectedDailyGeneration?.max ?? "N/A"),
          unit:
            (data.systemSpecifications.expectedDailyGeneration?.unit ?? "") +
            (data.systemSpecifications.expectedDailyGeneration?.note
              ? ` (${data.systemSpecifications.expectedDailyGeneration.note})`
              : ""),
        },
        {
          label: "System Efficiency",
          value: data.systemSpecifications.systemEfficiency?.value ?? "N/A",
          unit:
            (data.systemSpecifications.systemEfficiency?.unit ?? "") +
            (data.systemSpecifications.systemEfficiency?.type
              ? ` (${data.systemSpecifications.systemEfficiency.type})`
              : ""),
        },
        {
          label: "Warranty Period",
          value: data.systemSpecifications.warrantyPeriod?.value ?? "N/A",
          unit:
            (data.systemSpecifications.warrantyPeriod?.unit ?? "") +
            (data.systemSpecifications.warrantyPeriod?.appliesTo
              ? ` (Applies to: ${data.systemSpecifications.warrantyPeriod.appliesTo})`
              : ""),
        },
      ]
    : [];

  return (
    <div className="space-y-6">
      {/* System Specifications */}
      {data.systemSpecifications && (
        <Card className="w-full result-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2 text-blue-600" />
              System Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b  last:border-b-0">
                  <span className="text-sm">{spec.label}</span>
                  <div className="text-right">
                    <span className="font-semibold">{spec.value}</span>
                    <div className="text-xs">{spec.unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* What Can This System Power */}
      {/* <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            What Can This System Power?
          </CardTitle>
          <p className="text-lg text-gray-600">
            Your 4.8kW solar system with 10.2kWh battery storage can comfortably
            power:
          </p>
        </CardHeader>
        <CardContent>
          <div>
            <strong>Solar System (kW):</strong>{" "}
            {data.whatCanThisSystemPower?.system_power_capability
              ?.solar_system_kilowatts ?? "N/A"}
            <br />
            <strong>Battery Storage (kWh):</strong>{" "}
            {data.whatCanThisSystemPower?.system_power_capability
              ?.battery_storage_kilowatt_hours ?? "N/A"}
          </div>
          <div className="mt-2">
            <strong>Comfortably Powers:</strong>
            <ul>
              {data.whatCanThisSystemPower?.system_power_capability
                ?.comfortably_powers ? (
                Object.entries(
                  data.whatCanThisSystemPower.system_power_capability
                    .comfortably_powers
                ).map(([category, value]: [string, any]) => (
                  <li key={category}>
                    <strong>{category.replace(/_/g, " ")}:</strong>{" "}
                    {value.description ?? ""}
                    <ul>
                      {(value.appliances ?? []).map(
                        (appl: any, idx: number) => (
                          <li key={idx}>
                            {appl.name ?? "N/A"} ({appl.watts ?? "?"}W){" "}
                            {appl.icon ? `[${appl.icon}]` : ""}
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ))
              ) : (
                <li>N/A</li>
              )}
            </ul>
          </div>
        </CardContent>
      </Card> */}

      <Card className="result-card">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold gradient-text mb-2">
            What Can This System Power?
          </CardTitle>
          <p className="text-lg text-gray-600">
            Your{" "}
            {data.whatCanThisSystemPower?.system_power_capability
              ?.solar_system_kilowatts ?? "N/A"}
            kW solar system with{" "}
            {data.whatCanThisSystemPower?.system_power_capability
              ?.battery_storage_kilowatt_hours ?? "N/A"}
            kWh battery storage can comfortably power:
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xs rounded-sm gap-8 ">
            {data.whatCanThisSystemPower?.system_power_capability
              ?.comfortably_powers ? (
              Object.entries(
                data.whatCanThisSystemPower.system_power_capability
                  .comfortably_powers
              ).map(([category, value]: [string, any], categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="space-y-4 border-border border-2 p-2">
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="gradient-bg w-2 h-6 rounded-full mr-3"></span>
                    {category.replace(/_/g, " ")}
                  </h4>
                  <div className="mb-2">{value.description ?? ""}</div>
                  <div className="space-y-3">
                    {(value.appliances ?? []).map(
                      (item: any, itemIndex: number) => (
                        <div
                          key={itemIndex}
                          className=" p-4 hover:bg-gray-100 transition-colors  border-border border-t-[1px]">
                          <div className="flex items-start space-x-3 ">
                            <div className="p-2 rounded-lg shadow-sm">
                              {/* If you have an icon component mapping, use it here. Otherwise, just show the icon name */}
                              {item.icon ? (
                                <span className="h-5 w-5">{item.icon}</span>
                              ) : null}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium mb-1">{item.name}</h5>
                              <div className="text-sm space-y-1">
                                <div>
                                  {(item.quantity ?? item.watts)
                                    ? `${item.watts ?? ""}W`
                                    : ""}
                                </div>
                                <div className="text-xs text-green-600 font-medium">
                                  {item.hours ?? ""}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center">N/A</div>
            )}
          </div>

          {/* Daily Energy Production styled summary */}
          {/* <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
            <div className="text-center">
              <h5 className="text-lg font-semibold text-gray-900 mb-2">
                Daily Energy Production
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {data.daily_energy_production?.peak_summer
                      ? `${
                          data.daily_energy_production.peak_summer.min_kwh ??
                          "N/A"
                        }-${
                          data.daily_energy_production.peak_summer.max_kwh ??
                          "N/A"
                        } kWh`
                      : "N/A"}
                  </div>
                  <div className="text-sm text-gray-600">Peak Summer</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {data.daily_energy_production?.spring_fall
                      ? `${
                          data.daily_energy_production.spring_fall.min_kwh ??
                          "N/A"
                        }-${
                          data.daily_energy_production.spring_fall.max_kwh ??
                          "N/A"
                        } kWh`
                      : "N/A"}
                  </div>
                  <div className="text-sm text-gray-600">Spring/Fall</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {data.daily_energy_production?.winter
                      ? `${
                          data.daily_energy_production.winter.min_kwh ?? "N/A"
                        }-${
                          data.daily_energy_production.winter.max_kwh ?? "N/A"
                        } kWh`
                      : "N/A"}
                  </div>
                  <div className="text-sm text-gray-600">Winter</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    {data.daily_energy_production?.backup_power
                      ? `${
                          data.daily_energy_production.backup_power.min_days ??
                          "N/A"
                        }-${
                          data.daily_energy_production.backup_power.max_days ??
                          "N/A"
                        } Days`
                      : "N/A"}
                  </div>
                  <div className="text-sm text-gray-600">Backup Power</div>
                </div>
              </div>
            </div>
          </div> */}
        </CardContent>
      </Card>

      {/* Simultaneous Power Load Capacity */}
      <Card className="result-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            Simultaneous Power Load Capacity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <strong>Description:</strong>{" "}
            {data.simultaneousPowerLoadCapacity?.description ?? "N/A"}
          </div>
          <div className="space-y-3">
            {(data.simultaneousPowerLoadCapacity?.devices ?? []).length > 0 ? (
              data.simultaneousPowerLoadCapacity.devices.map(
                (dev: string, idx: number) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{dev}</span>
                  </div>
                )
              )
            ) : (
              <div className="text-sm">No devices listed.</div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Can It Power */}
      <Card className="result-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            Can It Power?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.canItPower ? (
              Object.entries(data.canItPower).map(
                ([device, val]: [string, any], idx) => (
                  <div key={device} className="flex items-start">
                    <span className="text-xl mr-3 mt-0.5 flex-shrink-0">
                      {val.emoji ?? "❓"}
                    </span>
                    <span className="text-sm">
                      <strong>{device}:</strong> {val.response ?? ""}
                    </span>
                  </div>
                )
              )
            ) : (
              <div className="text-sm">No data available.</div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Fallbacks for missing sections */}
      {!data.systemSpecifications && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>System Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.installationTimeline && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>Installation Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.whatCanThisSystemPower && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>What Can This System Power?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.daily_energy_production && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>Daily Energy Production</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.simultaneousPowerLoadCapacity && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>Simultaneous Power Load Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.canItPower && (
        <Card className="result-card">
          <CardHeader>
            <CardTitle>Can It Power?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
