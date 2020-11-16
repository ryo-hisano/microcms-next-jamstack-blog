import { useState, useEffect } from "react";

export default function Star() {
  const [stars, setStars] = useState(0);
  useEffect(async () => {
    try {
      const res = await fetch("https://api.github.com/repos/vercel/next.js");
      const json = await res.json();
      setStars(json.stargazers_count);
    } catch (err) {
      console.error("Fetch Error", err);
    }
  });

  return <div>▼Next.jsのスター数（useEffect）：{stars}▼</div>;
}
