export async function fetchPrimaryGeminiDescription(selectedPackage: any) {
  const res = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      packageName: selectedPackage?.name,
      packageDetails: JSON.stringify(selectedPackage),
    }),
  });

  if (!res.ok) throw new Error("Failed to fetch AI description");

  const data = await res.json();
  return typeof data.data === "string" ? JSON.parse(data.data) : data.data;
}

export async function fetchGeminiDescription(
  packageName: string,
  packageDetails: any
) {
  const res = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      packageName,
      packageDetails: JSON.stringify(packageDetails),
    }),
  });

  if (!res.ok) throw new Error("Failed to fetch AI description");

  const data = await res.json();
  return typeof data.data === "string" ? JSON.parse(data.data) : data.data;
}
