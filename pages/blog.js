import Link from "next/link";

const Blog = () => (
  <>
    <h1>ブログなりよ。</h1>
    本文
    <Link href="/">
      <a>TOPへリンク</a>
    </Link>
  </>
);

export default Blog;
