const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

async function chat(request, env) {
  if (!env.GEMINI_API_KEY) return json({ error: "Chat service is not configured." }, 503);

  let message;
  try {
    ({ message } = await request.json());
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (typeof message !== "string" || !message.trim() || message.length > 1000) {
    return json({ error: "Please enter a question of up to 1,000 characters." }, 400);
  }

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: "You are a helpful Vietnamese life guide. Reply in clear, concise Korean. Do not invent facts; say when you are unsure." }],
        },
        contents: [{ parts: [{ text: message.trim() }] }],
        generationConfig: { maxOutputTokens: 512 },
      }),
    },
  );

  if (!response.ok) {
    const detail = (await response.text()).slice(0, 500);
    console.error(`Gemini API request failed (${response.status}): ${detail}`);
    return json({ error: "The chat service is temporarily unavailable." }, 502);
  }

  const result = await response.json();
  const text = result.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || "")
    .join("")
    .trim();

  return text ? json({ reply: text }) : json({ error: "The chat service did not return a response." }, 502);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/chat" && request.method === "POST") return chat(request, env);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(url.toString(), request));
    }
    return env.ASSETS.fetch(request);
  },
};
