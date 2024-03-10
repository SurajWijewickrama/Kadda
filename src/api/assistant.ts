const askAssistant = async (prompt: string) => {
  const res = await fetch(
    `https://fastapi-production-2aab.up.railway.app/assistant`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    }
  );
  return res.json();
};

export default askAssistant;
