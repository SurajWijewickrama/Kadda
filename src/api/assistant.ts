const askAssistant = async (prompt: string) => {
  const res = await fetch("http://127.0.0.1:8000/assistant", {
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
