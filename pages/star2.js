import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Star2() {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/next.js",
    fetcher
    // { refreshInterval: 3 }
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      ▼Next.jsのスター数（SWR：refreshInterval無し）：{data.stargazers_count}▼
    </div>
  );
}
