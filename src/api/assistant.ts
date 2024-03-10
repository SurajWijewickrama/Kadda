const askAssistant = async (prompt: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}/assistant`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });
  return res.json();
};

export default askAssistant;
