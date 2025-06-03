import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function GeminiResultCard({ data }: { data: any }) {
  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* System Specifications */}
      <Card>
        <CardHeader>
          <CardTitle>System Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>
              <strong>Total Solar Capacity:</strong>{" "}
              {data.systemSpecifications?.totalSolarCapacity?.value ?? "N/A"}{" "}
              {data.systemSpecifications?.totalSolarCapacity?.unit ?? ""} (
              {data.systemSpecifications?.totalSolarCapacity?.type ?? ""})
            </li>
            <li>
              <strong>Inverter Capacity:</strong>{" "}
              {data.systemSpecifications?.inverterCapacity?.value ?? "N/A"}{" "}
              {data.systemSpecifications?.inverterCapacity?.unit ?? ""} (
              {data.systemSpecifications?.inverterCapacity?.type ?? ""})
            </li>
            <li>
              <strong>Battery Storage:</strong>{" "}
              {data.systemSpecifications?.batteryStorage?.value ?? "N/A"}{" "}
              {data.systemSpecifications?.batteryStorage?.unit ?? ""} (
              {data.systemSpecifications?.batteryStorage?.type ?? ""})
            </li>
            <li>
              <strong>Expected Daily Generation:</strong>{" "}
              {data.systemSpecifications?.expectedDailyGeneration?.min ?? "N/A"}
              -
              {data.systemSpecifications?.expectedDailyGeneration?.max ?? "N/A"}{" "}
              {data.systemSpecifications?.expectedDailyGeneration?.unit ?? ""} (
              {data.systemSpecifications?.expectedDailyGeneration?.note ?? ""})
            </li>
            <li>
              <strong>System Efficiency:</strong>{" "}
              {data.systemSpecifications?.systemEfficiency?.value ?? "N/A"}
              {data.systemSpecifications?.systemEfficiency?.unit ?? ""} (
              {data.systemSpecifications?.systemEfficiency?.type ?? ""})
            </li>
            <li>
              <strong>Warranty Period:</strong>{" "}
              {data.systemSpecifications?.warrantyPeriod?.value ?? "N/A"}{" "}
              {data.systemSpecifications?.warrantyPeriod?.unit ?? ""} ( Applies
              to: {data.systemSpecifications?.warrantyPeriod?.appliesTo ?? ""})
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Installation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Installation Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {(data.installationTimeline?.steps ?? []).length > 0 ? (
              data.installationTimeline.steps.map((step: any, idx: number) => (
                <li key={idx}>
                  <strong>{step.name ?? "Step"}:</strong>{" "}
                  {step.duration?.min ?? "N/A"}-{step.duration?.max ?? "N/A"}{" "}
                  {step.duration?.unit ?? ""}
                </li>
              ))
            ) : (
              <li>No steps provided.</li>
            )}
            <li>
              <strong>Total Timeline:</strong>{" "}
              {data.installationTimeline?.totalTimeline?.min ?? "N/A"}-
              {data.installationTimeline?.totalTimeline?.max ?? "N/A"}{" "}
              {data.installationTimeline?.totalTimeline?.unit ?? ""}
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* What Can This System Power */}
      <Card>
        <CardHeader>
          <CardTitle>What Can This System Power?</CardTitle>
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
      </Card>

      {/* Daily Energy Production */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Energy Production</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>
              <strong>Peak Summer:</strong>{" "}
              {data.daily_energy_production?.peak_summer?.min_kwh ?? "N/A"}-
              {data.daily_energy_production?.peak_summer?.max_kwh ?? "N/A"} kWh
            </li>
            <li>
              <strong>Spring/Fall:</strong>{" "}
              {data.daily_energy_production?.spring_fall?.min_kwh ?? "N/A"}-
              {data.daily_energy_production?.spring_fall?.max_kwh ?? "N/A"} kWh
            </li>
            <li>
              <strong>Winter:</strong>{" "}
              {data.daily_energy_production?.winter?.min_kwh ?? "N/A"}-
              {data.daily_energy_production?.winter?.max_kwh ?? "N/A"} kWh
            </li>
            <li>
              <strong>Backup Power:</strong>{" "}
              {data.daily_energy_production?.backup_power?.min_days ?? "N/A"}-
              {data.daily_energy_production?.backup_power?.max_days ?? "N/A"}{" "}
              days
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Simultaneous Power Load Capacity */}
      <Card>
        <CardHeader>
          <CardTitle>Simultaneous Power Load Capacity</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <strong>Description:</strong>{" "}
            {data.simultaneousPowerLoadCapacity?.description ?? "N/A"}
          </div>
          <ul>
            {(data.simultaneousPowerLoadCapacity?.devices ?? []).length > 0 ? (
              data.simultaneousPowerLoadCapacity.devices.map(
                (dev: string, idx: number) => <li key={idx}>{dev}</li>
              )
            ) : (
              <li>No devices listed.</li>
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Can It Power */}
      <Card>
        <CardHeader>
          <CardTitle>Can It Power?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {data.canItPower ? (
              Object.entries(data.canItPower).map(
                ([device, val]: [string, any]) => (
                  <li key={device}>
                    <strong>{device}:</strong> {val.emoji ?? ""}{" "}
                    {val.response ?? ""}
                  </li>
                )
              )
            ) : (
              <li>N/A</li>
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Fallbacks for missing sections */}
      {!data.systemSpecifications && (
        <Card>
          <CardHeader>
            <CardTitle>System Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.installationTimeline && (
        <Card>
          <CardHeader>
            <CardTitle>Installation Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.whatCanThisSystemPower && (
        <Card>
          <CardHeader>
            <CardTitle>What Can This System Power?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.daily_energy_production && (
        <Card>
          <CardHeader>
            <CardTitle>Daily Energy Production</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.simultaneousPowerLoadCapacity && (
        <Card>
          <CardHeader>
            <CardTitle>Simultaneous Power Load Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Not provided.</p>
          </CardContent>
        </Card>
      )}

      {!data.canItPower && (
        <Card>
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
