import Link from "next/link";

const About = () => (
  <>
    <style jsx>{`
      img {
        width: 200px;
      }
    `}</style>
    <h1>About</h1>
    <div>
      <img src="https://joeschmoe.io/api/v1/female/random" />
    </div>
    <p>ランダムにイラストが変わるAPI</p>
    <Link href="/">
      <a>TOPへ戻る</a>
    </Link>
  </>
);

export default About;
