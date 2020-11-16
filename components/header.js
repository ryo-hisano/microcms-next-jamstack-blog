import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="title">
          <Link href="/">
            <a>
              <img src="/next/logo.png" width="200" />
            </a>
          </Link>
        </h1>
      </header>
      <style jsx>{`
        h1 {
          color: gray;
          text-align: center;
        }
        .title {
          width: 200px;
          margin: 0 auto 20px;
        }
        strong {
          color: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  );
}
