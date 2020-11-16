import Link from "next/link";
import Head from "next/head";
import Star from "./star";
import Star2 from "./star2";

export default function Home({ blog }) {
  return (
    <>
      <Head>
        <title>My blog</title>
        <meta name="description" content="this is myblog" />
      </Head>
      <div>
        <Link href="about/">
          <a>別ページへ</a>
        </Link>
        <p>▼microCMSから（getStaticProps）▼</p>
        {blog.map((blog) => (
          <ul key={blog.id}>
            <li>
              <Link href={`blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          </ul>
        ))}
        <Star />
        <Star2 />
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://test-andus.microcms.io/api/v1/news", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
    revalidate: 3,
  };
};
