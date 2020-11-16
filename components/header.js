import Link from "next/link";

export default function Header() {
  return (
    <div>
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
      <header>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <Link href="/">
                  <a>
                    <img src="/next/logo.png" width="200" />
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
