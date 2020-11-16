import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Star2() {
  const { data, error } = useSWR("/next/api/hello/", fetcher, {
    refreshInterval: 3000,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>▼自前のAPI（SWR：refreshInterval:3000）：{data.date}▼</div>;
}
