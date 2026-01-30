export default function Home() {
  return (
    <article>
      <section className="flex-container">
        <div className="left">
          <h1 style={{fontSize:'8em', marginBottom:'0'}}>Lucia</h1>
          <h1 style={{fontSize:'8em', marginTop:'0'}}>Alday</h1>
        </div>
        <div className="right">
          <p>I am...</p>
          <a href="/Projects"><h3 className="item">A developer</h3></a>
          <a href="/Art"><h3 className="item">A designer</h3></a>
          <a href="/Art"><h3 className="item">An artist</h3></a>
          <a href="/Resume"><h4 className="item">View my experience</h4></a>
        </div>
      </section>
      <section>
        <hr></hr>
        <h2>About Me</h2>
      </section>
    </article>
  );
}
