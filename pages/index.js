import Link from "next/link";
import Head from "next/head";
import Star from "./star";
import Star2 from "./star2";
import Star3 from "./star3";

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
        <p>
          ビルド時にヘッドレスCMSから取得したデータを流し込む。
          <br />
          ページは事前にレンダリングされ（SSGの場合）、非常に高速。
          <br />
          getStaticPropsはHTMLファイルとJSONファイルを生成し、
          <br />
          どちらもCDNでキャッシュ可能なのでパフォーマンスに優れる。
          <br />
          親ページからのみ利用可能。
        </p>
        {blog.map((blog) => (
          <ul key={blog.id}>
            <li>
              <Link href={`blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          </ul>
        ))}
        <hr />
        <Star />
        <p>副作用フック（今回はページ開いた際に初回のみ実行）。</p>
        <hr />
        <Star2 />
        <p>
          SWRはReactHooksライブラリ。
          <br />
          （stale-while-revalidate）HTTPキャッシュ無効化戦略に由来。
          <br />
          リロードすると0が一瞬見えるuseEffectとは異なり、キャッシュされた数値が確認できる。
        </p>
        <hr />
        <Star3 />
        <p>SWRはのオプション指定で3秒ごとにリクエスト。</p>
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
