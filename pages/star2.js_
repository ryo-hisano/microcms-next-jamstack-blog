import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Star2() {
  const { data, error } = useSWR(
    "https://gnews.io/api/v4/top-headlines?token=31a9b052aab9872c1666be0d71a22c01&lang=ja",
    fetcher
    // { refreshInterval: 3 }
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <style jsx>{`
        img {
          width: 100px;
          margin-right: 10px;
        }
        ul {
          text-align: left;
          list-style: none;
        }
        li > a {
          display: flex;
          align-items: center;
        }
      `}</style>
      <p>▼GNews APIから{data.totalArticles}件中10件表示（SWR）▼</p>
      {data.articles.map((blog) => (
        <ul key={blog.id}>
          <li>
            <Link href={blog.url}>
              <a target="_blank" rel="noopener noreferrer">
                <img src={blog.image} />
                {blog.title}
              </a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
