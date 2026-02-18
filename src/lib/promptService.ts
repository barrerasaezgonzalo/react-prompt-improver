export async function postPrompt(
  endpoint: string,
  finalBody: Record<string, unknown>,
) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalBody),
  });

  const data = await response.json();

  return data;
}
