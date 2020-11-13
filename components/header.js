export default function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          color: gray;
          text-align: center;
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
              <h1 className="title">aaa</h1>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
