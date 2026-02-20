export default function Home() {
  return (
    <main>
      <article>
        <section className="left">
          <h1 style={{fontSize:'clamp(3rem, 15vw, 8rem)', marginBottom:'0'}}>Lucia</h1>
          <h1 style={{fontSize:'clamp(3rem, 15vw, 8rem)', marginTop:'0'}}>Alday</h1>
        </section>
        <section className="right">
          <p>I am...</p>
          <a href="/Developer"><h2 className="item">A developer</h2></a>
          <a href="/Researcher"><h2 className="item">A researcher</h2></a>
          <a href="/Designer"><h2 className="item">A designer</h2></a>
          <a href="/Resume"><h5 className="item">View my experience</h5></a>
        </section>
      </article>
        <hr></hr>
      <article>
        <h2>About Me</h2>
      </article>
    </main>
  );
}